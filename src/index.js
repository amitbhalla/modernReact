import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Spinner from './Spinner';
import SeasonDisplay from './SeasonDispplay';

class App extends Component {
  state = { latitude: null, errorMessage: '', mounted: true };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (this.state.mounted) {
          this.setState({ latitude: position.coords.latitude });
        }
      },
      (err) => {
        if (this.state.mounted) {
          this.setState({ errorMessage: err.message });
        }
      }
    );
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          Error:
          <strong> {' ' + this.state.errorMessage} </strong>
        </div>
      );
    } else if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <SeasonDisplay lat={this.state.latitude} />
        </div>
      );
    } else {
      return <Spinner>Waiting for location...</Spinner>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
