import { client_id, client_secret } from "../../../auth-server/authorization/authorization_code/app";


const getPlaylistTracks = async (playlistId) => {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=4`;
    const headers = {
      Authorization: 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
      "Content-Type": "application/json",
    };
  
    try {
      const response = await axios.get(url, { headers });
      return response.data.items.map((item) => item.track.album.images[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleSearch = async () => {
    const playlistName = `${genre} - Valence ${valence.toFixed(1)}`;
    const playlistId = await createPlaylist(playlistName);
    const uris = await searchTracks(valence, genre);
    const albumArtUrls = await getPlaylistTracks(playlistId);
  
    // Display album art and "Listen on Spotify" button
    const albumArtElements = albumArtUrls.map((url) => (
      <img src={url} alt="Album art" />
    ));
    const listenButton = (
      <a
        href={`https://open.spotify.com/playlist/${playlistId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Listen on Spotify
      </a>
    );
  
    // Render the search results
    setSearchResults(
      <>
        <h2>Search Results:</h2>
        {albumArtElements}
        {listenButton}
      </>
    );
  };
  