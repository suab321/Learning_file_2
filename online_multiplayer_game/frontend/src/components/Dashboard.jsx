import React from 'react';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:props.name,
        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <h4>{this.props.name}</h4>
                <button onClick={this.props.disconnect}>Disconnect</button>
            </div>
        )
    }
}
export default Dashboard;