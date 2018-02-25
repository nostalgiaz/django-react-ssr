import React from 'react';

class TrackForm extends React.Component {
    addTrack(e) {
        e.preventDefault();
        $.ajax({
            url: '/add-track',
            type: 'POST',
            data: {
                'spotifyId': $('#spotifyId').val(),
            },
            success: ((response) => {
                renderApp(response);
            })
        });
    }

    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Add a new jam!</h1>

                    <div className="input-group mb-3">
                        <input id='spotifyId' type="text" className="form-control" placeholder="The new jam URL" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.addTrack}>Add!</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

module.exports = TrackForm;
