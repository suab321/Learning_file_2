import React from 'react';
import Axios from 'axios';
import {Button} from 'react-materialize'
import TTT from './TTT';

const {ConnectUser,getOnlineUsers,disconnectSocket,socket}=require('../socket');
const {backendURL}=require('../url');


class Tictactoe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOkay:false,
            users:[],
            ioId:'',
            game:{isBusy:false,Challenger:null,me:null,sign:'',room:''},
            startTimer:false
        };

        this.challenge=this.challenge.bind(this);
    }

    challenge(user){
        console.log(user);
        socket.emit('Challenge',{user,userId:this.state.ioId});
    }

    componentDidMount(){
        Axios.get(`${backendURL}/isLoggedIn`,{withCredentials:true}).then(res=>{
            this.setState({ioId:res.data.userId});
        });
        socket.on('OnlineUsers',data=>{this.setState({users:data.users})});
        socket.on('ChallengeRequest',data=>{
            console.log(data);
            if(window.confirm(`${data.Challenger.name} is trying to challeneg,Do you accept?`)){
                socket.emit('ChallengeAccepted',data);
            }
            else
                socket.emit('ChallengeRejected',data);
        });
        socket.on('AcceptedChallenge',data=>{
            console.log(data);
            let room=data.data.Challenger.user_id.slice(data.data.Challenger.user_id.length-4,data.data.Challenger.user_id.length)+
                     data.data.Challenged.user_id.slice(data.data.Challenged.user_id.length-4,data.data.Challenged.user_id.length);
            socket.emit('JoinAccepted',room);
            var me;var Challenger;
            if(data.data.Challenged.user_id===this.state.ioId){
                me=data.data.Challenged;
                Challenger=data.data.Challenger;
            }
            else{
                me=data.data.Challenger;
                Challenger=data.data.Challenged;
            }
            let game={isBusy:true,Challenger:Challenger,me:me,sign:data.sign,room:room}
            this.setState({game:game});
            socket.emit('IntoGame',{room:room});
        });
        socket.on('RejectedChallenge',data=>console.log("Challenege Rejected "+data))
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
        // console.log(this.state);
        let connections=[];
        if(this.state.users===undefined)
            connections=<h4>"No one is online"</h4>;
        else if(this.state.users.length===0)
            connections=<h4>"No one is online"</h4>;
        else{
            const x=this.state.users.filter(i=>{
               if(i.user_id!==this.state.ioId)
                    return(
                       i
                    )
            });
            // console.log(connections)
            connections=x.map(i=>{
                return(<div>
                    <h1>{i.name}</h1>
                    <Button onClick={()=>{this.challenge(i)}}>challenge</Button>
                </div>);
            })
        }
        if(this.state.isOkay){
            if(!this.state.game.isBusy){
                return(
                    <div style={{textAlign:'center'}}>
                        {connections}
                    </div>
                )
            }
            else{
               return(
                <div>
                    <TTT info={this.state.game}/>
                </div>
               )
            }
    }
    else{
        return(
            <div style={{textAlign:'center'}}>
                <h1>Work is in developement</h1>
            </div>
        );
    }
}
    
}

export default Tictactoe;