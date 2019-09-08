import React from 'react';
import './tic.css';

const {socket}=require('../socket')

class TTT extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:null,
            isFinished:false,
            Winner:'',
            Looser:''
        };
        this.clicked=this.clicked.bind(this);
    }
    

    clicked(event){
        console.log(event.target.innerHTML);
        console.log(event.target.id);
        var i=event.target.id[0];
        var j=event.target.id[1];
        var x=this.state.a;
        x[i][j]=this.props.info.sign;
        socket.emit('MoveByMe',{block:event.target.id,room:this.props.info.room,Challenger:this.props.info.Challenger});
        this.setState({a:x});
        event.target.innerHTML=this.props.info.sign

    }
    componentDidMount(){
       var x=new Array(3);
       for(var i=0;i<3;i++){
           x[i]=new Array(3);
           for(var j=0;j<3;j++)
                x[i][j]=0
       }
       this.setState({a:x})
       console.log(this.props.info);
       socket.on('MoveFromOpp',data=>{console.log(data)});
    }

    render(){
        console.log(this.state.a);
        return(
            <div style={{textAlign:'center'}}>
            <h5>You are up against {this.props.info.Challenger.name}</h5>
             <table id="board">
                <tr>
                    <td id="00"onClick={this.clicked}></td>
                    <td id="01"onClick={this.clicked}></td>
                    <td id="02"onClick={this.clicked}></td>
                </tr>
                <tr>
                    <td id="10"onClick={this.clicked}></td>
                    <td id="11"onClick={this.clicked}></td>
                    <td id="12"onClick={this.clicked}></td>
                </tr>
                <tr >
                    <td id="20"onClick={this.clicked}></td>
                    <td id="21"onClick={this.clicked}></td>
                    <td id="22"onClick={this.clicked}></td>
                </tr>
                </table>
            </div>
        )
    }
}


export default TTT