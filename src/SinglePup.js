import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const SinglePup = (props) => {
    const {selectedPlayer} = props;
    // console.log( "This is my singlepup prop", props);
    // const navigate = useNavigate();
    return (
        <div className="single-player-view">
            <div className="header-info">
            <p className="pup-title">{selectedPlayer.name}</p>
            <p className="pup-number">#{selectedPlayer.id}</p>
            </div>
            <p>Team: {selectedPlayer.team ? selectedPlayer.team.name : 'Unassigned'}</p>
            <p>Breed: {selectedPlayer.breed}</p>
            <img src={selectedPlayer.imageUrl}  />
            <button id="see-all" onClick = {() => setPlayerList(setPlayerList({}))}>Back to all players</button>
        </div>
    );
};

export default SinglePup;

