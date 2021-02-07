#include "./build/sample.pb.h"
#include <iostream>

int main() {
    abhi::AddressBook book;
    abhi::Person* person = book.add_person();
    person->set_name("abhinav");
    person->set_id(2);
    abhi::Person::PhoneNumber* pn = person->add_number();
    pn->set_number("9051571833");
    pn->set_phone(abhi::Person::PhoneType::Person_PhoneType_MOBILE);

    std::string res= book.DebugString();
    std::cout<<res<<std::endl;
    // abhi::Person* person = book.mu
    // std::cout<<sizeof(book)<<std::endl;
    // abhi::Person person = book.mutable_person();
    // person.set_id(1);
    // person.set_name("abhinav");

    abhi::suab obj;
    abhi::suab::Req* req = obj.mutable_req();
    std::cout<<obj.has_res()<<std::endl; //0
    std::cout<<obj.has_req()<<std::endl; //1
}