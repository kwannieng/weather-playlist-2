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
      <div className="row d-flex justify-content-between text-center" id="diaryGrid">
        <div className="col-3 mx-auto mb-4">
        <div className='card'>
        {this.state.tracks.map(track => (
          <div key={track.id} className='card-body'>
            <img src={track.albumArt} alt={track.name} className='card-img-bottom'/>
            <h2 className='card-title'>{track.track} by {track.artist}</h2>
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
}
}

export default TrackList;