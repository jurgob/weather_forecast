import React, { Component } from 'react';
import Forecast from './components/Forecast'


class App extends Component {
  render() {
    return (
      <div className="App" style={{padding:"10px"}} >
        <Forecast />
      </div>
    );
  }
}

export default App;
