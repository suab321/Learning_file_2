extern "C"{
    #include <libavcodec/avcodec.h>
    #include <libavformat/avformat.h>
    #include <SDL2/SDL.h>
};
#include <iostream>
#include "opus/opus.h"
#include <queue>

#define SDL_AUDIO_BUFFER_SIZE 3072

SDL_AudioSpec wanted_audio_spec, audio_spec;
std::queue<AVFrame> audio_buffer; 

void cb(void* userdata, uint8_t* stream, int len)
{
    // while(len && !audio_buffer.empty()){
        if(!audio_buffer.empty()){
            while(len>0){
                AVFrame frame = audio_buffer.front();audio_buffer.pop();
                int toCopy = (len>frame.nb_samples)?(frame.nb_samples):(len);
                // std::cout<<frame.data[0][9]<<std::endl;
                memcpy(stream,frame.data[1],toCopy);
                len -= toCopy;
                stream += toCopy;
            }
        }
    // }
}

void init(AVFrame frame){
    static int n=0;
    if(!n){
        wanted_audio_spec.channels = frame.channels;
        wanted_audio_spec.format = frame.format;
        wanted_audio_spec.freq = frame.sample_rate;
        wanted_audio_spec.samples = frame.nb_samples;
        wanted_audio_spec.callback = cb;
        wanted_audio_spec.size = SDL_AUDIO_BUFFER_SIZE;
        wanted_audio_spec.userdata = NULL;
        wanted_audio_spec.silence = 0;
    }
    ++n;
}

int convert(AVFrame*);
int opusDecode(AVFrame* frame);

int main(int argv, char* argc[]) {
    av_register_all();

    // if (SDL_Init(SDL_INIT_AUDIO) < 0)
	// 		return -1;

//   if(SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO | SDL_INIT_TIMER)) {}

    AVFormatContext* avc = nullptr;
    if(avformat_open_input(&avc, argc[1],NULL,0)!=0)
        return -1;
    if(avformat_find_stream_info(avc,NULL)<0)
        return -1;
    av_dump_format(avc, 0, argc[1], 0);

    int audioStream = -1;
    AVCodecParameters* avc_par;
    AVCodec* avcodec;
    
    for(int i=0;i<avc->nb_streams;i++){
        avc_par = avc->streams[i]->codecpar;
        if(avc_par && avc_par->codec_type == AVMEDIA_TYPE_AUDIO){
            audioStream = i;
            avcodec = avcodec_find_decoder(avc_par->codec_id);
            break;
        }
    }
    AVCodecContext* avctx = avcodec_alloc_context3(avcodec);
    if(avctx == NULL){
        std::cout<<"Unable to alloc \n";
        return -1;
    }
    if(avcodec_parameters_to_context(avctx,avc_par)<0){
        std::cout<<"Error converting parameter to context \n";
        return -1;
    }
    if(avcodec_open2(avctx,avcodec,NULL)<0){
        std::cout<<"eError opening codec\n";
        return -1;
    }
    AVFrame* avframe = av_frame_alloc();
    AVPacket* avpacket = av_packet_alloc();

    int i=0;
    int cnt=0;
    int n=10;
    // int uhd = 0;
    while(av_read_frame(avc,avpacket) == 0){
        if(avpacket->stream_index == audioStream){
            int res = avcodec_send_packet(avctx,avpacket);
            if(res == AVERROR(EAGAIN)){
                continue;
            }
            else if(res<0){
                std::cout<<"error reading packet\n";
                break;
            }
            else{
                AVFrame* avframeRGB = av_frame_alloc();
                res = avcodec_receive_frame(avctx,avframeRGB);
                if(res == AVERROR(EAGAIN)){
                    continue;
                }
                else if(res<0){
                    std::cout<<"Error reading frame";
                    break;
                }
                
                else{
                    audio_buffer.push(*avframeRGB);
                    init(*avframeRGB);
                    // opusDecode(avframeRGB);
                    // vpxConvert(avframeRGB);
                    // av_frame_free(&RGB);
                }
                av_frame_free(&avframeRGB);
            }
        }
        av_packet_unref(avpacket);
    }
    if(SDL_OpenAudio(&wanted_audio_spec,&audio_spec)<0)
        std::cout<<"Unable to open SDL audio"<<std::endl;
    else
        std::cout<<"Opened audio\n";
    SDL_PauseAudio(0);
    unsigned long long x = LONG_LONG_MAX;
    while(x--);
    // std::cout<<x<<std::endl;
}


int convert(AVFrame* frame){
    if(!frame)
        return -1;
    int c=1;
    AVCodec* codec = avcodec_find_encoder(AV_CODEC_ID_OPUS);
    AVCodecContext* avctx = avcodec_alloc_context3(codec);
    avctx->bit_rate = 250*1024;
    avctx->sample_rate = frame->sample_rate;
    avctx->channels = frame->channels;
    avctx->sample_fmt = AV_SAMPLE_FMT_S16;
    avctx->channels = frame->channels;
    avctx->channel_layout = frame->channel_layout;
    // AV_SAMPLE_FMT_FLTP
    if(avcodec_open2(avctx,codec,NULL) == -1){
        std::cout<<"error opening codec\n";
        return -1;
    }
    // avcodec_encode_audio2()
    avcodec_send_frame(avctx,frame);
    AVPacket* avpkt = av_packet_alloc();
    // while(1){
    //     int ret = avcodec_receive_packet(avctx,avpkt);
    //     if(ret == AVERROR_EOF)
    //         break;
    //     if(ret == AVERROR(EAGAIN))
    //         continue;
    //     if(ret!=0){
    //         std::cout<<"error\n";
    //         return -1;
    //     }
    // }
    return 1;
}

int opusDecode(AVFrame* frame){
    int err=0;
    // OpusEncoder* encoder = opus_encoder_create(frame->sample_rate,frame->channels, OPUS_APPLICATION_AUDIO,&err);
    if(err<0){
        std::cout<<"error creating\n";
        return -1;
    }

    // opus_encoder_ctl(encoder,OPUS_SET_BITRATE(383*1024));
    uint8_t data[frame->pkt_size];
    uint8_t inData[frame->channels * 960];
    // opus_encode
    // for(int i=0;i<frame->channels;i++){
    //     inData[0] = 
    // }
    // int nbytes = opus_encode(encoder,frame->data,960,)

}

