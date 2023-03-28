import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import './style.css';


function SpotifyApi() {
  const spotifyApi = new SpotifyWebApi()
  const [spotifyToken, setSpotifyToken] = useState('')
  const [nowPlaying, setNowPlaying] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [topArtists, setTopArtists] = useState({});

  const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
      }, {})
  }

  useEffect(() => {
    console.log('This is what we derived from the URL:', getTokenFromUrl())
    const spotifyToken = getTokenFromUrl().access_token
    window.location.hash = ''
    console.log('This is our Spotify Token', spotifyToken)

    if (spotifyToken) {
      setSpotifyToken(spotifyToken)
      spotifyApi.setAccessToken(spotifyToken)
      spotifyApi.getMe().then((user) => {
        console.log(user)
        localStorage.setItem("userId", user.id)
      })
      setLoggedIn(true)
    }
  })

 return (
    <div>
      {!loggedIn && (
        <p className='logintext'>
          Please login to your Spotify account, we will then create the best playlist for you!
        </p>
      )}
      {!loggedIn && <a className='loginbutton' href="http://localhost:8888">Login to Spotify</a>}
      
      {loggedIn && (
        <Link to="Questions">
        <button>Start</button>
        </Link>
      )}
    </div>
  )
}

export default SpotifyApi;