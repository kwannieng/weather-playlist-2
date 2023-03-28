import React, { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import "bootstrap/dist/css/bootstrap.min.css";
import TrackList from '../PlaylistDisplay';

const spotifyApi = new SpotifyWebApi;

const TrackSearch = () => {
  const [topTrack, setTopTrack] = useState({});
  const [topGenre, setTopGenre] = useState({});
  const [topArtist, setTopArtist] = useState({});

   spotifyApi.getMyTopTracks().then(response => {
      setTopTrack(response.items[0].album.id)
      localStorage.setItem("Top Track", topTrack)
    })
    
    spotifyApi.getMyTopArtists().then(response => {
      setTopArtist(response.items[0].id);
      setTopGenre(response.items[0].genres[0])
      localStorage.setItem("Top Artist", topArtist)
      localStorage.setItem("Top Genre", topGenre)
    })

 return (
    <div>
      <button>Add to my Spotify</button>
      <TrackList/>
    </div>
  );
}

export default  TrackSearch;