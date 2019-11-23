import React from 'react';
import Axios from 'axios';
Axios.defaults.withCredentials=false;

class Accounts extends React.Component{
    constructor(){
        super();
        this.state={accounts:[]};
        this.login=this.login.bind(this);
    }

    login(user){
        Axios.post('http://localhost:3003/redirect',{name:user.username});
        // Axios.post('http://localhost:3003/redirect',{name:user.username},{withCredentials:true});
    }

    componentDidMount(){
        Axios.get('http://localhost:3002/own/users',{withCredentials:true}).then(res=>{
            this.setState({accounts:res.data});
        }).catch(err=>{console.log(err)});
    }
    render(){
        var users=this.state.accounts.map(i=>{
            return(
                <div style={{textAlign:'center'}}>
                    <h5 onClick={()=>{this.login(i)}}>{i.username}</h5>
                </div>
            )
        })
        return(
            <div>
              {users}
            </div>
        )
    }
}
export default Accounts;