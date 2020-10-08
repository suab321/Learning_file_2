cmake_minimum_required(VERSION 3.12)

add_executable(abhi video_processing.cpp)

find_library(AVFORMAT libavformat.so REQUIRED)
find_library(AVCODEC libavcodec.so REQUIRED)
find_library(AVUTIL libavutil.so REQUIRED)
find_library(SWSCALE libswscale.so REQUIRED)
find_library(SDL libSDL2.so REQUIRED)

target_link_libraries(abhi ${AVFORMAT} ${AVCODEC} ${AVUTIL} ${SWSCALE} ${SDL})