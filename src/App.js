import './App.css';
import React, {useState, useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi()

const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
  }, {});
}

function App() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [nowPlaying, setNowPlaying] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    console.log("This is what we derived from the URL:", getTokenFromUrl())
    const spotifyToken = getTokenFromUrl().access_token
    window.location.hash = "";
    console.log("This is our Spotify Token", spotifyToken);

    if (spotifyToken){
      setSpotifyToken(spotifyToken)
      setLoggedIn(true)
    }
  })
  return (
    <div className="App">
      <a href="http://localhost:8888">Login to Spotify</a>
    </div>
  );
}

export default App;
