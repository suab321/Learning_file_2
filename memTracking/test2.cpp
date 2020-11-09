#include<iostream>

extern "C"{
    #include <execinfo.h>
}

char* calls[20];
int s=0;

int func_1(int, double);
void func_2(int);
void func_3(int);
void func_4(int);

int func_1(int a, double d){
    func_2(a);
}
void func_2(int a){
    func_3(a);
}
void func_3(int a){
    func_4(a);
}
void func_4(int a){
    void* buffer[20];
    s = backtrace(buffer, 20);
    char** ch = backtrace_symbols(buffer, s);
    for(int i=0;i<s;i++){
        calls[i] = ch[i];
        // std::cout<<ch[i]<<std::endl;
    }
}

int main(){
    func_1(1,0.1);
    int t = 1;
    std::cout<<__FILE__<<std::endl;
    for(int i=0;i<s;i++)
        std::cout<<calls[i]<<std::endl;
}