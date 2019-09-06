import React from 'react';

const {backendURL}=require('../url')

function Login(props){
   return(
    <div>
       <a hidden href={`${backendURL}/authentication/login`}><button>Facebook Login</button></a>
       <a href={`${backendURL}/authentication/google_login`}><button>Google Login</button></a>
    </div>
   );
}
export default Login;