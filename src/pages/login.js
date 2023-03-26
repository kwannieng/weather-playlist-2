import SpotifyApi from "../utils/spotify-api";
import Header from "../components/Header";
import React from "react";
import './style.css';

const Login = () =>{
    return <div>
        <Header/>
        <SpotifyApi/>
    </div>
    }
    
export default Login;