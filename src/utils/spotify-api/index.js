import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Typed from "react-typed";

function SpotifyApi() {
  const spotifyApi = new SpotifyWebApi()
  const [spotifyToken, setSpotifyToken] = useState('')
  const [nowPlaying, setNowPlaying] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  const getTokenFromUrl = () => {
    console.log(window.location.hash)
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
      })
      setLoggedIn(true)
    }
  })

  const getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      console.log(response)
      setNowPlaying({
        name: response.item.name,
        albumArt: response.item.album.images[0].url
      })
    })
  }

  return (
    <div className="App">
      {!loggedIn && 
         <Typed
            strings={[
                "Please login to your Spotify account, we will then create the best playlist for you!"
                ]}
                typeSpeed={40}
            >
        </Typed>}
      {!loggedIn && <a href="http://localhost:8888">Login to Spotify</a>}

      {loggedIn && (
        <>
          <div>Now Playing: {nowPlaying.name}</div>
          <div>
            <img src={nowPlaying.albumArt} style={{ height: 150 }} />
          </div>
        </>
      )}
      {loggedIn && <button onClick={() => getNowPlaying()}>Check Now Playing</button>}
    </div>
  )
}

export default SpotifyApi;