const createPlaylist = async (playlistName) => {
    const url = "https://api.spotify.com/v1/me/playlists";
    const headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    };
    const data = {
      name: playlistName,
    };
  
    try {
      const response = await axios.post(url, data, { headers });
      return response.data.id;
    } catch (error) {
      console.error(error);
    }
  };
  
  const searchTracks = async (valence, genre) => {
    const url = `https://api.spotify.com/v1/search?type=track&q=genre%3A%22${genre}%22%20valence%3A${valence}`;
    const headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    };
  
    try {
      const response = await axios.get(url, { headers });
      return response.data.tracks.items.map((item) => item.uri);
    } catch (error) {
      console.error(error);
    }
  };

  const addTracksToPlaylist = async (playlistId, uris) => {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    const headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    };
    const data = {
      uris: uris,
    };
  
    try {
      await axios.post(url, data, { headers });
      console.log("Tracks added to playlist!");
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSearch = async () => {
    const playlistName = `${genre} - Valence ${valence.toFixed(1)}`;
    const playlistId = await createPlaylist(playlistName);
    const uris = await searchTracks(valence, genre);
  }  