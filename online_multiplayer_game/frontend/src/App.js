import React from 'react';
import Axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import Login from './components/Login';
import Game from './components/Game';
import Tictactoe from './components/Tictactoe';
import Dashboard from './components/Dashboard';
import {NavItem,Navbar} from 'react-materialize'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const {backendURL}=require('./url');
// const {disconnectSocket}=require('./socket');

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
     <Navbar centerLogo alignLinks="left">
      <Link to='/games'><NavItem>
      Games
      </NavItem></Link>
      <NavItem href="components.html">
      Components
      </NavItem>
      </Navbar>
       <Route exact strict path="/" render={(props)=> <Dashboard {...props} name={this.state.name}/>}/>
       <Route exact strict path="/games" render={(props)=> <Game {...props} name={this.state.name}/>}/>
       <Route exact strict path="/games/:game" render={(props)=> <Tictactoe {...props} name={this.state.name}/>}/>
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
