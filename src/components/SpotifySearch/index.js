import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { client_id, client_secret } from '../ID'
import SpotifyWebApi from 'spotify-web-api-js';

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

function TrackSearch() {
  const [valence, setValence] = useState(localStorage.getItem('valence') || 0.5);
  const [market, setMarket] = useState(localStorage.getItem('market') || 'US');
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    localStorage.setItem('valence', valence);
    localStorage.setItem('market', market);
  }, [valence, market]);


  const handleSearch = () => {
    axios.get(`https://api.spotify.com/v1/search?q=genre%3Aambient+valence%3A${valence}&type=track&market=${market}&limit=10`, {
      headers: {
        'Authorization': 'Basic ' + (new (client_id + ':' + client_secret).toString('base64'))
      }
    }).then(response => {
      setTracks(response.data.tracks.items);
    }).catch(error => {
      console.error(error);
    });
  };

  const handleCreatePlaylist = () => {
    const trackUris = tracks.map(track => track.uri);

    axios.post(`https://api.spotify.com/v1/users/${client_id}/playlists`, {
      name: 'My Playlist',
      public: false
    }, {
      headers: {
        'Authorization': 'Basic ' + (new (client_id + ':' + client_secret).toString('base64'))
      }
    }).then(response => {
      const playlistId = response.data.id;

      axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        uris: trackUris
      }, {
        headers: {
          'Authorization': 'Basic ' + (new (client_id + ':' + client_secret).toString('base64'))
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="valence">Valence:</label>
        <input type="range" min="0" max="1" step="0.1" id="valence" value={valence} onChange={handleValenceChange} />
        <span>{valence}</span>
      </div>
      <div>
        <label htmlFor="market">Market:</label>
        <input type="text" id="market" value={market} onChange={handleMarketChange} />
      </div>
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleCreatePlaylist}>Create Playlist</button>
    </div>
    
)}
}
export default  TrackSearch;