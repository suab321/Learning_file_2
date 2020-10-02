#include<linux/init.h>
#include<linux/module.h>
#include<linux/moduleparam.h>

MODULE_LICENSE("GPL");//other wise warning given and some modules is unavailable, if not given

int count = 1;
module_param(count,int,S_IRUGO | S_IWUSR); //for passing command line argument to a variable
__init void test1(void){
    printk("Inisde %s \n", __FUNCTION__);
}

void test2(void){
    printk("Inisde %s \n", __FUNCTION__);
}

__init int ex01_module_init(void){    //__init marks this to be used during initialization only after initialization completes 
//the __init functions and __init variables are deleted, function calling __init functions after initialization causes the modules to crash
    printk("Inside %s \n",__FUNCTION__);
    test1();
    int i=0;
    for(i=0;i<count;i++)
        printk("Hello Index is =  %d\n",count);
    return 0;
}


void ex01_module_exit(void){
    int i=0;
    for(i=0;i<count;i++)
        printk("Hello Index is =  %d\n",count);
    printk("Inside the %s \n", __FUNCTION__);
    test2();
}

module_init(ex01_module_init);
module_exit(ex01_module_exit);