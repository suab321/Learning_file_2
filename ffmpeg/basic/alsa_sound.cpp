extern "C"{
    #include <libavcodec/avcodec.h>
    #include <libavformat/avformat.h>
    #include "alsa/asoundlib.h"
};
#include <iostream>
#include "opus/opus.h"
#include <queue>

static const int channel = 6;
static const int sample_rate = 48000;


int main(int argv, char* argc[]) {
    av_register_all();

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
    snd_pcm_t* pcm = NULL;
    if(snd_pcm_open(&pcm,"default",SND_PCM_STREAM_PLAYBACK,0)<0){
        printf("Error opening pcm\n");
        return -1;
    }
    if(snd_pcm_set_params(
        pcm,
        SND_PCM_FORMAT_U8,
        SND_PCM_ACCESS_LAST,
        channel,
        sample_rate,
        1,
        sample_rate
        /4) < 0){
        printf("Error setting params\n");
        return -1;
    }
    snd_pcm_uframes_t period_size = 0, buffer_size = 0;
    if (snd_pcm_get_params(pcm,&buffer_size,&period_size)<0) {
        printf("Error getting params\n");
        return -1;
    }
    std::cout<<buffer_size<<" "<<period_size<<std::endl;
    const int buf_sz = period_size * channel * sizeof(uint8_t);
    void* buf = malloc(buf_sz);
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
                    bool whb=false;
                    memset(buf,0,buf_sz);
                    buf = avframeRGB->data[0];
                    int interData [1025] = {0};
                    int cnt = 0;
                    for(int i=0;i<avframeRGB->nb_samples;i++){
                        interData[cnt++] = avframeRGB->data[0][i];
                    }
                    buf = interData;
                    int ret = snd_pcm_writei(pcm,buf,period_size);
                    if (ret < 0) {
                        if ((ret = snd_pcm_recover(pcm, ret, 1)) == 0) {
                            printf("recovered after xrun (overrun/underrun)\n");
                        }
                    }
                    if (ret < 0) {
                        printf("snd_pcm_writei");
                    }
                    // std::cout<<ret<<std::endl;
                    // audio_buffer.push(*avframeRGB);
                    // init(*avframeRGB);
                    // opusDecode(avframeRGB);
                    // vpxConvert(avframeRGB);
                    // av_frame_free(&RGB);
                }
                av_frame_free(&avframeRGB);
            }
        }
        av_packet_unref(avpacket);
    }
    snd_pcm_drain(pcm);
    snd_pcm_close(pcm);
}
