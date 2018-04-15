import React from 'react';
import Track from './Track';

class TrackList extends React.Component {
	render() {
		if (this.props.tracks.length === 0) {
			return null;
		}

		let trackNodes = this.props.tracks.map((track) => {
			return <Track track={track} key={track.spotifyId} />;
		});

		return (
			<div className="album py-5 bg-light">
				<div className='container'>
					<div className='row'>{trackNodes}</div>
				</div>
			</div>
		);
	}
}

module.exports = TrackList;
