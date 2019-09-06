import React from 'react';
import Axios from 'axios';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Route} from 'react-router';
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const {backendURL}=require('./url');
require('./socket');

class App extends React.Component{
  constructor(){
    super();
    this.state={isLoggedIn:false,name:''}
  }
  componentDidMount(){
   Axios.get(`${backendURL}/isLoggedIn`,{withCredentials:true}).then(res=>{
        this.setState({isLoggedIn:true,name:res.data.name})
   }).catch(err=>{this.setState({isLoggedIn:false})});
  }


render(){
 if(this.state.isLoggedIn){
   return(
     <Router>
     <switch>
       <Route path="/" render={(props)=> <Dashboard {...props} name={this.state.name}/>}/>
     </switch>
     </Router>
   )
 }
 else{
   return(
     <Router>
     <switch>
       <Route path="*" component={Login}/>
     </switch>
     </Router>
   );
 }
}
}

export default App;
