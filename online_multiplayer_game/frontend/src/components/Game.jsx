import React from 'react';
import {Link} from 'react-router-dom';

const Game=(props)=>{
    return(
        <div style={{textAlign:'center'}}>
            <h1>Welcome {props.name}</h1>
            <ul>
               <Link to='/games/tictactoe'><li>TIC TAC TOE</li></Link>
            </ul>
        </div>
    )
}

export default Game;