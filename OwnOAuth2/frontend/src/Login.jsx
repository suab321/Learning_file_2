import React from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';


class Login extends React.Component{
    constructor(){
        super();
        this.state={Redirect:false};

        this.submit=this.submit.bind(this);

        this.username=React.createRef();
        this.password=React.createRef();
    }
    submit(){
        console.log(this.username.current.value)
       Axios.post('http://localhost:3002/own/login',{username:this.username.current.value,password:this.password.current.value},{withCredentials:true}).then(res=>{
            this.setState({Redirect:true});
       }).catch(err=>{console.log(err)})
    }
    render(){
        if(!this.state.Redirect){
            return(
                <div>
                    <input type="text" ref={this.username} placeholder="email" name="email"/>
                    <input type="text" ref={this.password} placeholder="password"/>
                    <button onClick={this.submit}>Submit</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Redirect to="/"/>
                </div>
            )
        }
    }
}

export default Login;