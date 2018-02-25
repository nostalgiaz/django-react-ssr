import React from 'react';
import TrackList from './TrackList';
import TrackForm from './TrackForm';

class TrackBox extends React.Component {
	render() {
		return (
			<div>
				<TrackList tracks={this.props.tracks} />
				<TrackForm />
			</div>
		);
	}
}

module.exports = TrackBox;
