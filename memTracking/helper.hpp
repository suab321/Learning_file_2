#include <iostream>
#include <cstring>
#include <cstdlib>


inline void help_filter(char** ch){
    char deli = '(';
    *ch = strtok(*ch, &deli);
    *ch = strtok(NULL, &deli);
    deli = '+';
    *ch = strtok(*ch, &deli);
}


void update_size(int* allocate, int ptr, size_t size){
    allocate[ptr] += size;
}

inline void help_insert(char** calls, int* arr, char* funcName, int* cnt, size_t data){
    int flag = 1;
    for(int i=0;i<*cnt;i++){
        if(!strcmp(funcName, calls[i])){
            update_size(arr, i, data);
            flag = 0;
        }
    }
    if(flag){
        calls[*cnt] = funcName;
        update_size(arr, *cnt, data);
        *cnt = *cnt+1;
    }
}