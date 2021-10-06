import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { latitude: null, errorMessage: '', mounted: true };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        if (this.state.mounted) {
          this.setState({ latitude: position.coords.latitude });
        }
      },
      err => {
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
