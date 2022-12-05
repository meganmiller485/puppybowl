import React from 'react';
import PupShow from './PupShow';


//props is our backpack that we put our pupData into in index.js - we called it players
const PupList = (props) => {
    //we need to define our props with everything we will need in this component,
    //these need to match the props brought in on PupList in index.js
    const {getSinglePlayer, setSelectedPlayer} = props;
    // console.log("these are my props from puplist",props);

    return (
    <div id = "PupContainer">
        {/* here we are mapping through our players to display single players on our browser */}
        {props.players.map((player) => {
            return (
            <PupShow player = {player} key = {player.id} getSinglePlayer = {getSinglePlayer} setSelectedPlayer = {setSelectedPlayer}/>
            // <div className="single-player-card" key = {player.id}>
            // <div className="header-info">
            //                             {/* {//*change the access point to just player instead of props.players//} */}
            //     <p className="pup-title">{player.name}</p>
            //     <p className="pup-number">#{player.id}</p>
            // </div>
            // <img src={player.imageUrl} />
            // <button className="detail-button" data-id={player.id}>See details</button>
            // <button className="delete-button" data-id={player.id}>Remove from roster</button>
            // </div>  
            );
        }) };
    </div>
        );
};

export default PupList;