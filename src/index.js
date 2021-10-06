import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { latitude: null, errorMessage: '' };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return (
                <div>
                    Error:
                    <strong>{' ' + this.state.errorMessage}</strong>
                </div>
            );
        } else if (!this.state.errorMessage && this.state.latitude) {
            return (
                <div>
                    Latitude:
                    <strong>{' ' + this.state.latitude}</strong>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
