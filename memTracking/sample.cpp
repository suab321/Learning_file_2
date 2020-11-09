#include <iostream>

#include "test.hpp"

void func(){
    int* j = new int(2);
}

int main(){
    int* i = new int(2);
    delete i;
    func();
    for(int i=0;i<s;i++)
        std::cout<<calls[i]<<" "<<allocate[i]<<" "<<deallocate[i]<<std::endl;
}