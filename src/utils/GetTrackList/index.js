import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


const GetTrackList = () => {
  return new Promise((resolve, reject) => {
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
      const recommendations = [];
      for (let i = 0; i < 10; i++) {
        recommendations.push({
          artist: response.tracks[i].artists[0].name,
          track: response.tracks[i].name,
          albumArt: response.tracks[i].album.images[0].url,
        })
      }
      console.log(recommendations);
      resolve(recommendations);
    }).catch(error => {
      reject(error);
    });
  });
};

export default GetTrackList;