#include<iostream>
#include<boost/asio.hpp>

using namespace boost::asio;
using ip::tcp;
using std::string;
using std::cout;
using std::endl;



int main(){
   boost::asio::io_service io;
   tcp::socket sock(io);
   sock.connect(tcp::endpoint(boost::asio::ip::address::from_string("127.0.0.1"),8000));
   boost::asio::streambuf buf;
   boost::asio::read_until(sock,buf,"\n");
   const char* recv=boost::asio::buffer_cast<const char*>(buf.data());
   cout<<recv<<endl;
   const string msg("hello from client.\n");
   boost::asio::write(sock,boost::asio::buffer(msg));
   boost::asio::read_until(sock,buf,"\n");
   boost::asio::write(sock,boost::asio::buffer(msg));
}


