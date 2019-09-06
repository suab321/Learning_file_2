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
            </div>
        )
    }
}
export default Dashboard;