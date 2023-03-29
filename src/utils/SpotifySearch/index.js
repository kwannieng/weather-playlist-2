import React, { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import "bootstrap/dist/css/bootstrap.min.css";
import TrackList from '../../components/PlaylistDisplay';
import './style.css';
import PlaylistCreate from '../PlaylistCreate'


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
    <div className='d-flex flex-row-reverse'>
      <button className='p-1' onClick={() => PlaylistCreate()}>Add to Spotify</button>
      <TrackList/>
    </div>
  );
}

export default  TrackSearch;