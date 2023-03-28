import React, { Component } from 'react';
import GetTrackList from '../../utils/GetTrackList';

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }

  async componentDidMount() {
    const tracks = await GetTrackList();
    this.setState({ tracks });
  }

render() {
  return (
    <div className='container-fluid'>
      <div className="row d-flex justify-content-around">   
      <h1>Weather Playlist</h1>
      </div>
      <div className="row d-flex justify-content-around ">
        <div className='col-2'>
            {this.state.tracks.map(track => (
            <div key={track.id} >
            <img src={track.albumArt} alt={track.name}/>
            <h2>{track.track} by {track.artist}</h2>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
}

export default TrackList;