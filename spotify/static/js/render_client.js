const React = require('react');
const ReactDOM = require('react-dom');

window.renderApp = function(props) {
    console.log(store.component)
    const component = require('./src/' + store.component);
    const domContainerNode = document.getElementById('app-container');
    // Unmounting the component before mounting it again
    console.log(component)
    console.log(React.createFactory(component)(props))
    console.log("GESU")
    console.log(component, domContainerNode, props)
    ReactDOM.unmountComponentAtNode(domContainerNode);
    ReactDOM.render(React.createFactory(component)(props), domContainerNode);
};


renderApp(store.props);
