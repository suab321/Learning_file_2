#include<linux/init.h>
#include<linux/module.h>
#include<linux/moduleparam.h>

#include<linux/fs.h> //for character driver support

int m1_open(struct inode* pinode, struct file* pfile){
    printk("Inside %s", __FUNCTION__);
    return 0; 
}
ssize_t m1_read(struct file* pfile,char __user* buffer, size_t length, loff_t* offset){ 
    printk("Inside %s", __FUNCTION__);
    return 0;
}
ssize_t m1_write(struct file* pfile,const char __user* buffer,size_t length, loff_t* offset){ 
    printk("Inside %s", __FUNCTION__);
    return length;
}
int m1_close(struct inode* pinode, struct file* pfile){ 
    printk("Inside %s", __FUNCTION__);
    return 0;
}


// to hold the file operation performed on this device
struct file_operations m1_file_operations = {
    .owner = THIS_MODULE,
    .open = m1_open,
    .read = m1_read,
    .write = m1_write,
    .release = m1_close
};

MODULE_LICENSE("GPL");//other wise warning given and some modules is unavailable, if not given

int count = 1;
module_param(count,int,S_IRUGO | S_IWUSR); //for passing command line argument to a variable
__init void test1(void){
    printk("Inisde %s \n", __FUNCTION__);
    return 0;
}

void test2(void){
    printk("Inisde %s \n", __FUNCTION__);
}

int ex01_module_init(void){    //__init marks this to be used during initialization only after initialization completes 
//the __init functions and __init variables are deleted, function calling __init functions after initialization causes the modules to crash
    printk("Inside %s \n",__FUNCTION__);
    register_chrdev(259, //major number,
                    "Simple Char Dev", //Name of driver
                    &m1_file_operations //File Operation
    );
    // test1();
    // int i=0;
    // for(i=0;i<count;i++)
    //     printk("Hello Index is =  %d\n",count);
    return 0;
}


void ex01_module_exit(void){
    // int i=0;
    // for(i=0;i<count;i++)
    //     printk("Hello Index is =  %d\n",count);
    printk("Inside the %s \n", __FUNCTION__);
    unregister_chrdev(240 ,"Simple Char Dev");
    // test2();
}

module_init(ex01_module_init);
module_exit(ex01_module_exit);