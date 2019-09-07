import React from 'react';
// import {Button} from 'react-materialize'

const {ConnectUser,getOnlineUsers,disconnectSocket}=require('../socket');
// const {backendURL}=require('../url');


class Tictactoe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOkay:false,
            users:[]
        };

        // this.getUsers=this.getUsers.bind(this);
    }

    componentDidMount(){
        console.log(this.props.match.params);
        if(this.props.match.params.game==='tictactoe')
            this.setState({isOkay:true});
        ConnectUser();
        getOnlineUsers();
    }
    componentWillUnmount(){
        disconnectSocket();
    }

    render(){
        let connections;
        if(this.state.users.length===0)
            connections=<h4>"No one is online"</h4>;
        if(this.state.isOkay){
        return(
            <div style={{textAlign:'center'}}>
                {connections}
            </div>
        )
    }
    else{
        return(
            <div style={{textAlign:'center'}}>
                <h1>Work is in developement</h1>
            </div>
        )
    }
}
    
}

export default Tictactoe;