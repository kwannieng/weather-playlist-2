// import SpotifyApi from "../utils/spotify-api";
import Header from "../components/Header";
import React from "react";
import './style.css';
import TrackSearch from "../components/SpotifySearch";

const Login = () =>{
    return <div>
        <Header/>
        <TrackSearch/>
    </div>
    }
    
export default Login;