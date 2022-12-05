import React, {useEffect, useState} from "react";
import {createRoot} from 'react-dom/client';
import PupList from "./PupList";
import SinglePup from "./SinglePup";
//this is will wrap around the app so we can use it on entire application
import { BrowserRouter, Route, Routes } from "react-router-dom";



const PuppyMain = () => {
   
    //set our state as empty array with variable name players
    //setPlayers will be our function that manipulates the state of our variable players
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState({});


   //get api info for players and assign it to our players state
    const getPlayers = async (setPlayers) => {
        try {
            const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players");
            const data = await response.json();
            setPlayers(data.data.players);
        } catch (error){
        console.error('oops! Trouble fetching players', error);}
    };

    //get api info of a single player and assign it to our selected player state
    const getSinglePlayer = async (setSelectedPlayer, playerId) => {
        try {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players/${playerId}`); //use variable names
            const data = await response.json();
            setSelectedPlayer(data.data.player);
          } catch (error) {
            console.error('Uh oh, trouble fetching a player!', error);}
    };
  
    //use Effect to grab the api and return it successfully 
    useEffect(() => {
      getPlayers(setPlayers);
    
    }, []);


   //setting up form state
    const [nameofpup, setnameofpup] = useState("");
    const [breed, setbreed] = useState("");

  
    //our return!
    return( 
        <div id="main">
            <div id="routes">
              <Routes>
                <Route></Route>
                <Route></Route>
              </Routes>
            </div>
            
            <div id="new-player-form">
                <form onSubmit={(event) => {event.preventDefault(); console.log("Hello")}}>
                    <label htmlFor="Name">Name: </label>
                    <input value = {nameofpup} onChange={(event) => {setnameofpup(event.target.value)}} type="text" placeholder="Name"></input>
                    <label htmlFor="Breed">Breed: </label>
                    <input value = {breed} onChange={(event) => {setbreed(event.target.value)}} type="text" placeholder="Breed"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
            <div id="all-players-container">
                    {selectedPlayer.id ? (<SinglePup selectedPlayer = {selectedPlayer}/>
                    ) : (
                        <PupList 
                        players = {players}
                        getSinglePlayer = {getSinglePlayer}
                        setSelectedPlayer = {setSelectedPlayer}/>
                    )};
            </div>
        </div>
    );
    
};


    //create root in index.html
const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(
<BrowserRouter>
    <PuppyMain />
</BrowserRouter>
);
