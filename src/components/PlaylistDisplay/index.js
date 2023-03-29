import React, { Component } from 'react';
import GetTrackList from '../../utils/GetTrackList';
import './style.css';

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
    <h1>My Weather Playlist</h1>
      <div className="d-flex  justify-content-around">   
        <div className="row">
            {this.state.tracks.map(track => (
            <div key={track.track} className='col-4 song'>
            <img src={track.albumArt} alt={track.name} className='albumArt'/>
            <h2 className='track'>{track.track} by {track.artist}</h2>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
}

export default TrackList;