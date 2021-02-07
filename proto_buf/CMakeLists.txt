cmake_minimum_required(VERSION 3.1)

find_package(Protobuf REQUIRED)
find_package(Threads REQUIRED)
message(STATUS ${Protobuf_libraries})

set(CMAKE_CXX_FLAG "${CMAKE_CXX_FLAG} fsanitize=address")

protobuf_generate_cpp(PROTO_SRCS PROTO_HDRS sample.proto)
add_executable(abhi test.cpp ${PROTO_SRCS} ${PROTO_HDRS})

target_link_libraries(abhi ${Protobuf_LIBRARY} Threads::Threads)