import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import CreatePlaylist from '../PlaylistCreate';
import DisplayPlaylist from '../PlaylistDisplay';

function TrackSearch() {
const spotifyApi = new SpotifyWebApi;
const [topArtist, setTopArtist] = useState({});
const [topTrack, setTopTrack] = useState({});
const [topGenre, setTopGenre] = useState({});
const [recommendations, setRecommendation] = useState({});

  const GetTopData = () => {
   spotifyApi.getMyTopTracks().then(response => {
      setTopTrack(response.items[0].album.id)
      console.log(topTrack)
      localStorage.setItem("Top Track", topTrack)
    })
    
    spotifyApi.getMyTopArtists().then(response => {
      setTopArtist(response.items[0].id);
      setTopGenre(response.items[0].genres[0])
      console.log(topArtist)
      console.log(topGenre)
      localStorage.setItem("Top Artist", topArtist)
      localStorage.setItem("Top Genre", topGenre)
    })

  }

  const GetTrackList = () => {
    let seed_artists = localStorage.getItem("Top Artist")
    let seed_genres = localStorage.getItem("Top Genre")
    let seed_tracks = localStorage.getItem("Top Track")
    let target_valence = localStorage.getItem("Valence")

    spotifyApi.getRecommendations({
      seed_artists: seed_artists,
      seed_genres: seed_genres,
      seed_tracks: seed_tracks,
      target_valence: target_valence
    }).then(response => {
      // setRecommendation({
      //   artist: response.tracks[0].artists[0].name,
      //   track: response.tracks[0].name,
      //   albumArt: response.tracks[0].album.images[0].url,
      // })
      console.log(response)
    })
  }

  return (
    <div>
      <button onClick={() => TrackSearch() }>GetData</button>
      <h1>My Top Artists</h1>
      <ul>
       <displayPlaylist/>
      </ul>
      <button onClick={() => CreatePlaylist() }>Add Weather Playlist to my Spotify</button>
    </div>
  );
}


export default  TrackSearch;