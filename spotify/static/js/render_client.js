const React = require('react'),
    ReactDOM = require('react-dom'),
    TrackBox = require('./src/TrackBox');

ReactDOM.render(
    React.createElement(TrackBox, store.props),
    document.getElementById('app-container')
);
