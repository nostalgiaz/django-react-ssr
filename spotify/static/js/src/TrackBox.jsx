import React from 'react';
import TrackList from './TrackList';
import TrackForm from './TrackForm';

class TrackBox extends React.Component {
	componentWillMount() {
		this.setState({tracks: this.props.tracks});
	}

	handleTracksUpdate(tracks) {
		this.setState({tracks});
	}

	render() {
		return (
			<div>
				<TrackList tracks={this.state.tracks} onTracksUpdate={this.handleTracksUpdate.bind(this)} />
				<TrackForm onTracksUpdate={this.handleTracksUpdate.bind(this)} />
			</div>
		);
	}
}

module.exports = TrackBox;
