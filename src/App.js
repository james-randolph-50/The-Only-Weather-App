import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}`

class App extends Component {
  constructor() {
    super()

      this.state = {
        fetchingData: true,
        weatherData: {}
      }
  }
  render() {
    const { fetchingData } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-header">
            {
              fetchingData ?
              <img src={logo} className="App-logo" alt="logo" />
              :
              <h1>Data is received</h1>
            }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
