import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { lat: null, errorMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    )
  }

  // render must always be defiened
  render(){
    if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude is: {this.state.lat}</div>
    }

    if(!this.state.lat && this.state.errorMessage){
      return <div>Error:: {this.state.errorMessage}</div>
    }

    return <div>loading ... </div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

/*
  When a state is changes, render method is called again
*/