import React from 'react';
import Axios from 'axios';
// Axios.defaults.withCredentials=true;

class App extends React.Component{
  componentDidMount(){
    Axios.get('http://localhost:3003/user',{withCredentials:true});
  }
  render(){
    return(
      <div>
        Hello
        <a href="http://localhost:3003/login"><button>login</button></a>
      </div>
    )
  }
}
export default App;