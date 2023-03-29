import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


const AddTracks = () => {
let uris = localStorage.getItem("TrackArray")
let PlaylistId = localStorage.getItem("Playlist ID")

    spotifyApi.addTracksToPlaylist({
      playlistId: PlaylistId,
      position:0,
      uris: uris,
      }).then(response => {
      console.log("Tracks added to the playlist");
    })
  };



export default AddTracks;