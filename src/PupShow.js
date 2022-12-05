import React from "react";
import { Route, Routes } from "react-router-dom";

const PupShow = (props) => {
    //we need to define our backpack as player
    // console.log("pupshow props", props)
    
    const {getSinglePlayer, player, setSelectedPlayer} = props
    
    return(    
        <div className="single-player-card">
            <div className="header-info">
                                        {/* {//*change the access point to just player instead of props.players//} */}
                <p className="pup-title">{player.name}</p>
                <p className="pup-number">#{player.id}</p>
            </div>
            <img src={player.imageUrl} />
            <button className="detail-button" data-id={player.id} onClick = {() => getSinglePlayer(setSelectedPlayer, player.id)}>See details</button> 
                    
            <button className="delete-button" data-id={player.id}>Remove from roster</button>
        </div>  
    );
};

export default PupShow;