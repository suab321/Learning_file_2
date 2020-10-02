#include<iostream>
#include<boost/asio.hpp>
#include<sstream>

using namespace boost::asio;
using ip::tcp;
using std::string;
using std::cout;
using std::endl;

void read(tcp::socket& sock){
    boost::asio::streambuf buf;
    boost::asio::read_until(sock, buf, '\n');
    const char* msg = boost::asio::buffer_cast<const char*>(buf.data());
    cout<<msg<<endl;
}

void write_data(tcp::socket& sock, string&& msg){
    std::stringstream ss(msg);
    boost::asio::write(sock,boost::asio::buffer("sjbdh\n"));
}

int main(){
    boost::asio::io_service io;
    tcp::acceptor _acceptor(io, tcp::endpoint(tcp::v4(),8000));
    tcp::socket _socket(io);
    _acceptor.accept(_socket);
    write_data(_socket, "hello from server.\n");
    read(_socket);
    io.run();
}