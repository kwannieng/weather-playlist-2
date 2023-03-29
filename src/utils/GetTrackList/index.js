import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


const GetTrackList = () => {
  return new Promise((resolve, reject) => {
    let seed_artists = localStorage.getItem("Top Artist")
    let seed_genres = localStorage.getItem("Top Genre")
    let seed_tracks = localStorage.getItem("Top Track")
    let target_energy = localStorage.getItem("Energy")

    spotifyApi.getRecommendations({
      seed_artists: seed_artists,
      seed_genres: seed_genres,
      seed_tracks: seed_tracks,
      target_energy: target_energy
    }).then(response => {
      console.log(response)
      const recommendations = [];
      const uris = [];

      for (let i = 0; i < 12; i++) {
        recommendations.push({
          artist: response.tracks[i].artists[0].name,
          track: response.tracks[i].name,
          albumArt: response.tracks[i].album.images[0].url,
          preview: response.tracks[i].preview_url,
        })
        uris.push(
          response.tracks[i].uri
        )
      }
      console.log(recommendations)
      console.log(uris)
      localStorage.setItem("TrackArray", uris);
      resolve(recommendations);
    }).catch(error => {
      reject(error);
    });
  });
};

export default GetTrackList;