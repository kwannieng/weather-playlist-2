import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

const PlaylistCreate = () => {
    let id = localStorage.getItem("userId");
    console.log(id)
    // let body = json.stringify({
    //   name: "Weather Playlist",
    //   description: "Full of songs that match the current weather",
    //   public: false})    
    
    spotifyApi.createPlaylist(id)

    .then(response => {
    //   console.log(response);
      localStorage.setItem("Playlist ID", response.id);
    });
};

export default PlaylistCreate;