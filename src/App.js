import './App.css'
import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from './utils'

const spotifyApi = new SpotifyWebApi()

function App() {
  const [spotifyToken, setSpotifyToken] = useState('')
  const [nowPlaying, setNowPlaying] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

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

export default App
