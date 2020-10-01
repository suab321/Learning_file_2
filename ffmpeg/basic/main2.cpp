extern "C"
{
    #include <libavcodec/avcodec.h>
    #include <libavformat/avformat.h>
    #include <libswscale/swscale.h>
    #include <SDL2/SDL.h>
    #include <SDL2/SDL_thread.h>
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

AVFrame* convertImage(AVFrame* frame, AVPixelFormat srcFmt, AVPixelFormat destFmt){
    struct SwsContext* swscaler = sws_getContext(frame->width,frame->height,srcFmt,frame->width,frame->height,destFmt, SWS_BILINEAR,NULL,NULL,NULL);
    AVFrame* tmp = av_frame_alloc();
    // int pixels = avpicture_get_size(destFmt,tframe->width,tframe->height);
    // uint8_t* buffer = (uint8_t*)av_malloc(pixels*sizeof(uint8_t));
    // avpicture_fill((AVPicture*)tmp,buffer,destFmt,tframe->width,tframe->height);
    tmp->width = frame->width;
    tmp->height = frame->height;
    tmp->format = destFmt;
    // int ret = av_ima
    if(av_frame_get_buffer(tmp,32) !=0)
        return NULL;
    int res = sws_scale(swscaler,(uint8_t const * const*)frame->data,frame->linesize,0,frame->height,tmp->data,tmp->linesize);
    sws_freeContext(swscaler);
    return tmp;
}


void displayImage(AVFrame* frame){
    if(SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO | SDL_INIT_TIMER)){
        std::cout<<"error\n";
        return;
    }
    // SDL_Surface* screen;
    SDL_Window* window;
    window = SDL_CreateWindow("Image",SDL_WINDOWPOS_UNDEFINED,SDL_WINDOWPOS_UNDEFINED,frame->width,frame->height,SDL_WINDOW_SHOWN);
    if(window==NULL){
        std::cout<<"Error creating window "<<SDL_GetError()<<"\n";
        return;
    }
    // screen = SDL_GetWindowSurface(window);
    // if(screen==NULL){
    //     std::cout<<"Error creating setting screen"<<SDL_GetError()<<"\n";
    //     return;
    // }
    SDL_Texture* texture;
    SDL_Renderer* renderer = SDL_CreateRenderer(window,-1,0);
    texture = SDL_CreateTexture(renderer,SDL_PIXELFORMAT_YV12,SDL_TEXTUREACCESS_STREAMING,frame->width,frame->height);
    // uint8_t yPlaneSz, uvPlaneSz;
    // yPlaneSz = frame->width*frame->height;
    // uvPlaneSz = yPlaneSz/4;
    // uint8_t* yPlane,*uPlane,*vPlane;
    // yPlane = (uint8_t*)malloc(yPlaneSz);
    // uPlane = (uint8_t*)malloc(uvPlaneSz);
    // vPlane = (uint8_t*)malloc(uvPlaneSz);
    // struct SwsContext* swscalar = sws_getContext(frame->width,frame->height,(AVPixelFormat)frame->format,frame->width,frame->height,AV_PIX_FMT_YUV420P,SWS_BILINEAR,NULL,NULL,NULL);
    // AVPicture avPic;
    // avPic.data[0]=frame->data[0];
    // avPic.data[1]=frame->data[1];
    // avPic.data[2]=frame->data[2];
    // avPic.linesize[0] = frame->width;
    // avPic.linesize[1] = frame->width/2;
    // sws_scale(swscalar,frame->data,frame->linesize,0,frame->height,avPic.data,avPic.linesize);
    SDL_UpdateYUVTexture(
        texture,
        NULL,
        frame->data[0],
        frame->width,
        frame->data[1],
        frame->width/2,
        frame->data[2],
        frame->width/2
    );
    SDL_RenderClear(renderer);
    SDL_RenderCopy(renderer,texture,NULL,NULL);
    SDL_RenderPresent(renderer);
    SDL_Delay(100);
    SDL_DestroyWindow(window);
}

static const char* av_make_error(int err){
    static char str[AV_ERROR_MAX_STRING_SIZE];
    memset(str,0,sizeof(str));
    return av_make_error_string(str,AV_ERROR_MAX_STRING_SIZE,err);
}

int main(int argv, char** argc){
    av_register_all();

    AVFormatContext* avc = nullptr;
    if(avformat_open_input(&avc, argc[1],NULL,0)!=0)
        return -1;
    if(avformat_find_stream_info(avc,NULL)<0)
        return -1;
    // av_dump_format(avc, 0, argc[1], 0);

    int videoStream = -1;
    AVCodecParameters* avc_par;
    AVCodec* avcodec;
    for(int i=0;i<avc->nb_streams;i++){
        avc_par = avc->streams[i]->codecpar;
        if(avc_par && avc_par->codec_type == AVMEDIA_TYPE_VIDEO){
            videoStream = i;
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
    
    int pixels = avpicture_get_size(AV_PIX_FMT_RGB0,avctx->width,avctx->height);
    uint8_t* buffer = (uint8_t*)av_malloc(pixels*sizeof(uint8_t));
    // avpicture_fill((AVPicture*)avframeRGB,buffer,AV_PIX_FMT_RGB0,avctx->width,avctx->height);

    if(avframe == NULL || avpacket == NULL){
        std::cout<<"error allocating space\n";
        return -1;
    }

    SwsContext* swscalarctx = sws_getContext(
        avctx->height,avctx->width,avctx->pix_fmt,
        avctx->width,avctx->height,AV_PIX_FMT_RGB0,
        SWS_BILINEAR,NULL,NULL,NULL
    );

    int i=0;
    AVFrame* avframeRGB = av_frame_alloc();

    while(av_read_frame(avc,avpacket) == 0){
        if(avpacket->stream_index == videoStream){
            int res = avcodec_send_packet(avctx,avpacket);
            if(res == AVERROR(EAGAIN)){
                continue;
            }
            else if(res<0){
                std::cout<<"error reading packet\n";
                break;
            }
            else{
                res = avcodec_receive_frame(avctx,avframeRGB);
                if(res == AVERROR(EAGAIN)){
                    continue;
                }
                else if(res<0){
                    std::cout<<"Error reading frame";
                    break;
                }
                else{
                    ++i;
                    // saveFrame(avframeRGB);
                    AVFrame* RGB = convertImage(avframeRGB,avctx->pix_fmt,AV_PIX_FMT_RGB24);
                    // if(*(avframeRGB->data[0])!=16)
                    //     int whgf=1;
                    // displayImage(avframeRGB);
                    av_frame_free(&RGB);
                }
                
            }
        }
        av_packet_unref(avpacket);
    }

    std::cout<<"Frames "<<i<<"\n";
    av_frame_free(&avframe);
    av_frame_free(&avframeRGB);
    av_packet_free(&avpacket);
    avcodec_close(avctx);
    avcodec_free_context(&avctx);
}