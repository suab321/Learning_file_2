import React from 'react';
// import Axios from 'axios';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Accounts from './Accounts';
import Axios from 'axios';
// Axios.defaults.withCredentials=true;

class App extends React.Component{
  constructor(){
    super();
    this.state={
      isLogged:false
    }
  }
  componentDidMount(){
    Axios.get('http://localhost:3002/user',{withCredentials:true}).then(res=>{
      this.setState({isLogged:true});
    }).catch(err=>{this.setState({isLogged:false})})
  }
  render(){
    if(!this.state.isLogged){
      return(
        <Router>
          <switch>
            <Route strict exact path="/" component={Login}/>
            <Route strict exact path="/accounts" component={Accounts}/>
          </switch>
        </Router>
      )
    }
    else{
      return(
        <Router>
          <switch>
            <Route strict exact path="/" component={Dashboard}/>
            <Route strict exact path="/accounts" component={Accounts}/>
          </switch>
        </Router>
      )
    }
  }
}
export default App;