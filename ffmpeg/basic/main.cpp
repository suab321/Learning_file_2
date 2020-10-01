extern "C"
{
    #include <libavcodec/codec.h>
    #include <libavformat/avformat.h>
    #include <libswscale/swscale.h>
};
#include<iostream>


void SaveFrame(AVFrame* frameRGB, int width, int height, int iFrame){
    FILE* p;
    char filename[32];
    sprintf(filename,"frame%d.ppm",iFrame);
    p=fopen(filename,"wb");
    if(p==NULL)
        return;
    fprintf(p, "P6\n%d %d\n255\n", width, height);
    for(int y=0;y<height;y++){
        fwrite(frameRGB->data[0]+y*frameRGB->linesize[0],1,3,p);
    }
    fclose(p);
}

int main(int argv, char** argc){
    av_register_all();
    AVFormatContext* avc = nullptr;
    if(avformat_open_input(&avc, argc[1],NULL,0)!=0)
        return -1;
    if(avformat_find_stream_info(avc,NULL)<0)
        return -1;
    av_dump_format(avc, 0, argc[1], 0);

    AVCodecContext* avctx,* avctxOrig;
    int videoStream = -1;
    for(int i=0;i<avc->nb_streams;i++){
        if(avc->streams[i]->codec->codec_type == AVMEDIA_TYPE_VIDEO){
            videoStream = i;
            break;
        }
    }
    if(videoStream == -1)
        return -1;
    avctx = avc->streams[videoStream]->codec;
    AVCodec* avcodec;
    avcodec = avcodec_find_decoder(avctx->codec_id);
    if(avcodec == NULL){
        std::cout<<"Codec not found \n";
        return -1;
    }
    // avctx = avcodec_alloc_context3(avcodec);

    // if(avcodec_copy_context(avctxOrig, avctx)!=0)
    //     std::cout<<"Error copying \n";
    
    if(avcodec_open2(avctx,avcodec, NULL)!=0){
        std::cout<<"error opening codec \n";
        return -1;
    }
    AVFrame* frame = NULL;
    AVFrame* frameRGB = NULL;
    frame = av_frame_alloc();
    frameRGB = av_frame_alloc();
    if(frame == NULL){
        std::cout<<"Error allocating space \n";
        return -1;
    }
    uint8_t* buffer = NULL;
    int numBytes = avpicture_get_size(AV_PIX_FMT_RGB24,avctx->width, avctx->height);
    buffer = (uint8_t*)av_malloc(numBytes*sizeof(uint8_t));

    avpicture_fill((AVPicture*)frameRGB, buffer, AV_PIX_FMT_RGB24,avctx->width,avctx->height);

    SwsContext* sws_ctx = NULL;
    int frameFinished=0;
    AVPacket* av_packet;
    sws_ctx = sws_getContext(
        avctx->width,
        avctx->height,
        avctx->pix_fmt,
        avctx->width,
        avctx->height,
        AV_PIX_FMT_RGB24,
        SWS_BILINEAR,
        NULL,
        NULL,
        NULL
    );
    int i=0;
    while(av_read_frame(avc, av_packet)==0){
        if(av_packet->stream_index == videoStream){
            avcodec_decode_video2(avctx,frame,&frameFinished,av_packet);
            if(frameFinished){
                sws_scale(sws_ctx,(uint8_t const * const*)frame->data,frame->linesize,0,avctx->height,frameRGB->data,frameRGB->linesize);
                ++i;
            }
        }
        av_free_packet(av_packet);
    }
}