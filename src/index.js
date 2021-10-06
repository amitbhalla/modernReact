import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>Hello World from React!</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
