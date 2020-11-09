#include<iostream>
#include<vector>
#include<unordered_map>
#include<utility>
#include<cstring>
#include <boost/stacktrace.hpp>
#define BOOST_STACKTRACE_USE_ADDR2LINE

#include "helper.hpp"

extern "C"{
    #include <execinfo.h>
}

#define N 20

extern char* calls[N] = {0};
extern int allocate[N] = {0};
extern int deallocate[N] = {0};
extern int s=0;


inline void* operator new(size_t size){
    // std::cout<<boost::stacktrace::stacktrace()<<std::endl;
    static void* buffer[10];
    memset(buffer,0,10);
    int x = backtrace(buffer, 10);
    char** ch = backtrace_symbols(buffer, x);
    help_filter(&ch[1]);
    help_insert(calls, allocate, ch[1], &s, size);
    return malloc(size);
}

inline void operator delete(void* ptr, size_t size){
    static void* buffer[10];
    memset(buffer,0,10);
    int x = backtrace(buffer, 10);
    char** ch = backtrace_symbols(buffer, x);
    help_filter(&ch[1]);
    help_insert(calls, deallocate, ch[1], &s, size);
    free(ptr);
}



// int func_1(int, double);
// void func_2(int);
// int func_3(int);
// void func_4(int);

// int func_1(int a, double d){
//     int* i = new int(3);
//     func_2(a);
// }
// void func_2(int a){
//     func_3(a);
// }
// int func_3(int a){
//     char* i = new char(2);
//     int* i1 = new int(3);
//     delete i;
// }
// void func_4(int a){
//     void* buffer[20];
//     s = backtrace(buffer, 20);
//     char** ch = backtrace_symbols(buffer, s);
//     for(int i=0;i<s;i++){
//         std::cout<<ch[i]<<std::endl;
//     }
// }

// int main(){
//     func_1(1,0.1);
//     std::cout<<__FILE__<<std::endl;
//     for(int i=0;i<s;i++)
//         std::cout<<calls[i]<<" "<<allocate[i]<<" "<<deallocate[i]<<std::endl;
// }