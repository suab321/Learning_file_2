#include<iostream>
#include<boost/asio.hpp>
#include<boost/bind.hpp>
#include<boost/shared_ptr.hpp>
#include<boost/enable_shared_from_this.hpp>

using namespace boost::asio;
using ip::tcp;
using std::string;
using std::cout;
using std::endl;

class connection_hanlder:public boost::enable_shared_from_this<connection_hanlder>{
    private:
        tcp::socket sock;
        char data[1000];
        connection_hanlder(io_service& io):sock(io){}
    public:
        typedef boost::shared_ptr<connection_hanlder> connection_pointer;
        static connection_pointer get_connection_handler(boost::asio::io_service& io){
            return connection_pointer(new connection_hanlder(io));
        }
        tcp::socket& socket(){
            return this->sock;
        }
        void write_complete(const boost::system::error_code& ec){
            if(!ec)
                cout<<"message sent to client"<<endl;
            // handle_connection();//to keep connection alive
        }
        void read_complete(const boost::system::error_code& ec){
            if(!ec)
                cout<<data<<endl;
            // handle_connection();//to keep connection alive
        }
        void handle_connection(){
            const string msg("hello from server.\n"); 
            sock.async_write_some(boost::asio::buffer(msg),boost::bind(
                &connection_hanlder::write_complete, shared_from_this(),boost::asio::placeholders::error
            ));
            sock.async_read_some(boost::asio::buffer(data,100),boost::bind(
                &connection_hanlder::read_complete,shared_from_this(),boost::asio::placeholders::error
            ));
        }
};

class tcp_server{
    private:
        tcp::acceptor _acceptor;
        void start(){
           connection_hanlder::connection_pointer conn = connection_hanlder::get_connection_handler(_acceptor.get_io_service());
            _acceptor.async_accept(conn->socket(),boost::bind(
                &tcp_server::handle_accept,this,conn, boost::asio::placeholders::error
            ));
        }
        void handle_accept(connection_hanlder::connection_pointer& pnt, const boost::system::error_code& ec){
            if(!ec)
                pnt->handle_connection();
            start();
        }
    public:
        tcp_server(boost::asio::io_service& io):_acceptor(io, tcp::endpoint(tcp::v4(),8000)){}
        void run(boost::asio::io_service& io){
            start();
            io.run();
        }
};

int main(){
    boost::asio::io_service io;
    tcp_server server(io);
    server.run(io);
}