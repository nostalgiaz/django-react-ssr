import React from 'react';

class Track extends React.Component {
    handleDeleteTrackBtn(e) {
        e.preventDefault();
        e.stopPropagation();

        $.ajax({
            url: '/delete-track',
            type: 'POST',
            data: {
                'spotifyId': this.props.track.spotifyId,
            },
            success: ((response) => {
                this.props.onTracksUpdate(response.tracks);
            })
        });
    }

    handleAddTrackBtn() {
        let win = window.open(this.props.track.spotifyUrl, '_blank');
        win.focus();
    }

    render() {
        let track = this.props.track;

        return (
            <div className="col-md-4" onClick={this.handleAddTrackBtn.bind(this)}>
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={track.cover}/>
                    <div className="card-body">
                        <p className="card-text">
                            <button className='btn btn-outline-danger btn-sm float-right' onClick={this.handleDeleteTrackBtn.bind(this)}>Delete</button>
                            {track.title}<br/>
                            <small>{track.artist.name}</small>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Track;
