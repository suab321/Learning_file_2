import React from 'react';
import './tic.css';

const {socket}=require('../socket')

class TTT extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:null,
            Result:{Winner:'',Looser:'',isFinished:false},
            myChance:true,
            hasClicked:false
        };
        this.clicked=this.clicked.bind(this);
        this.hasWon=this.hasWon.bind(this);
    }

    hasWon(id,sign){
        return new Promise((resolve,reject)=>{
            let i=id[0];
            let j=id[1];
            let x=this.state.a;
            x[i][j]=sign;
            var c=0;
            for(c=0;c<3;c++){
                if(x[i][c]!==sign)
                    break;
            }
            if(c==3)
                resolve(true);
            for(c=0;c<3;c++){
                if(x[c][j]!==sign)
                    break;
            }
            if(c===3)
            resolve(true);
            for(c=0;c<3;c++){
                if(x[c][c]!==sign)
                    break;
            }

            if(c==3)
                resolve(true);
            for(c=0;c<3;c++){
                if(x[c][2-c]!==sign)
                    break;
            }
            if(c==3)
                resolve(true);
            resolve(false);
        })
        
    }
    

    async clicked(event){
        if(this.state.myChance){
                var x=this.state.a;
                console.log(x);
                if(x[event.target.id[0]][event.target.id[1]]===0){
                    if(this.props.info.sign==='x')
                        socket.emit('MoveByMe',{block:event.target.id,room:this.props.info.room,Challenger:this.props.info.Challenger,sign:'x'});
                    else
                        socket.emit('MoveByMe',{block:event.target.id,room:this.props.info.room,Challenger:this.props.info.Challenger,sign:'o'});
                    let x=this.state.a;
                    x[event.target.id[0]][event.target.id[1]]=this.props.info.sign;
                    document.getElementById(event.target.id).innerHTML=this.props.info.sign;
                    this.setState({a:x,myChance:false});
                    let result=await this.hasWon(event.target.id,this.props.info.sign);
                    console.log(result);
                    if(result)
                        this.setState({Result:{Winner:this.props.info.me,Looser:this.props.info.Challenger,isFinished:true}});
                }
                else
                    alert('Place is already Occupied!');
        }
        else
            alert('Its your opponents turns!');
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
       socket.on('MoveFromOpp',async data=>{
        //    console.log(data);
           let result=await this.hasWon(data.block,data.sign);
           console.log(result);
           if(result)
                this.setState({Result:{Winner:this.props.info.Challenger,Looser:this.props.info.me,isFinished:true}});
            else{
                let x=this.state.a;
                x[data.block[0]][data.block[1]]=data.sign;
                document.getElementById(data.block).innerHTML=data.sign;
                    this.setState({a:x,myChance:true});
            }
       });
    }

    render(){
        console.log(this.state.a);
        if(!this.state.Result.isFinished){
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
        else{
            if(this.state.Result.Winner.user_id===this.props.info.Challenger.user_id){
                return(
                    <div style={{textAlign:false}}>
                        <h1>Better Luck Next Time brother!</h1>
                    </div>
                )
            }
            else{
                return(
                    <div style={{textAlign:false}}>
                        <h1>Congrats bro you won!</h1>
                    </div>
                )
            }
        }
    }
}


export default TTT