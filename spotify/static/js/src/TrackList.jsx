import React from 'react';
import Track from './Track';

class TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {method: 'default'};
    }

    sortTracks(tracks) {
        let sortedTracks = [];

        if (this.state.method === 'title') {
            sortedTracks = tracks.sort((track1, track2) => track1.title > track2.title ? 1 : -1);
        } else if (this.state.method === 'author') {
            sortedTracks = tracks.sort((track1, track2) => track1.artist.name > track2.artist.name ? 1 : -1);
        } else {
            sortedTracks = tracks.sort((track1, track2) => track1.pk > track2.pk ? 1 : -1);
        }

        this.setState({sortedTracks, isOpen: false})
    }

    componentWillReceiveProps(nextProps) {
        this.sortTracks(nextProps.tracks)
    }

    componentWillMount() {
        this.sortTracks(this.props.tracks);
    }

    handleSorting(method) {
        this.setState({method}, () => this.sortTracks(this.props.tracks));
    }

    render() {
        if (this.state.sortedTracks == null || this.state.sortedTracks.length === 0) {
            return null;
        }

        let trackNodes = this.state.sortedTracks.map((track) => {
            return <Track track={track} key={track.spotifyId} onTracksUpdate={this.props.onTracksUpdate}/>;
        });

        return (
            <div className="album py-5 bg-light">

                <div className='container'>
                    <div className="dropdown ">
                        <button className="btn dropdown-toggle" type="button"
                                onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                            Sort
                        </button>
                        <div className={`dropdown-menu ${this.state.isOpen ? 'show' : ''}`}>
                            <a className="dropdown-item" href="#" onClick={() => this.handleSorting('default')}>By
                                default</a>
                            <a className="dropdown-item" href="#" onClick={() => this.handleSorting('title')}>By
                                Title</a>
                            <a className="dropdown-item" href="#" onClick={() => this.handleSorting('author')}>By
                                Author</a>
                        </div>
                    </div>

                    <hr/>

                    <div className='row'>{trackNodes}</div>
                </div>
            </div>
        );
    }
}

module.exports = TrackList;
