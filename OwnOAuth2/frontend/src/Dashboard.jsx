import React from 'react';
import Axios from 'axios';

Axios.defaults.withCredentials=true;

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={name:''};
        this.submit=this.submit.bind(this);
        this.logout=this.logout.bind(this);
        this.url=React.createRef();
        Axios.get('http://localhost:3002/');
    }

    logout(){
        Axios.get('http://localhost:3002/logout');
    }

    submit(){
        Axios.get('http://localhost:3002/user',{withCredentials:true}).then(res=>{
            Axios.post('http://localhost:3002/own/createProject',{redirectURL:this.url.current.value},{headers:{Authorization:`Bearer ${res.data.token}`},'Access-Control-Allow-Origin':'http://localhost:3003'}).then(res1=>{
                console.log(res1);
            }).catch(err=>{
                console.log(err);
            })
        }).catch(err=>{console.log(err)});
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.url} placeholder="Enter your redirect url"/>
                <button onClick={this.submit}>Get access Token</button>
                <button onClick={this.logout}>Logout</button>
                <a href="http://localhost:3002"><button>OAuth2</button></a>
            </div>
        )
    }
}

export default Dashboard;