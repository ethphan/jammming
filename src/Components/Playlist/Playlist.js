import React from 'react';

import {TrackList} from '../TrackList/TrackList';

import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName}
                        onChange={this.handleNameChange}/>
                <TrackList onRemove={this.props.onRemove}
                        tracks={this.props.playlistTracks}
                        isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
};

export default Playlist;