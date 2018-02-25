import React from 'react';

class Track extends React.Component {
    handleBtnClick() {
        let win = window.open(this.props.track.spotifyUrl, '_blank');
        win.focus();
    }

    render() {
        let track = this.props.track;

        return (
            <div className="col-md-4" onClick={this.handleBtnClick.bind(this)}>
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={track.cover}/>
                    <div className="card-body">
                        <p className="card-text">
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
