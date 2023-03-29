import Header from "../components/Header";
import React from "react";
import './style.css';
import TrackSearch from "../utils/SpotifySearch";

const Playlist = () =>{
    return <div>
        <Header/>
        <TrackSearch/>
    </div>
    }
    
export default Playlist;