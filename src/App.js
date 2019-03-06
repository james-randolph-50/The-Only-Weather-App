import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import './App.css';
import CurrentForecast from './components/CurrentForecast'
import Navbar from './components/Navbar'


const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

      this.state = {
        fetchingData: true,
        weatherData: {}
      }
  }

  // Get Lat and Long

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(response => response.json())
      .then(weatherData => this.setState({ 
        fetchingData: false,
        weatherData }))
    });
  }

  render() {
    const { fetchingData, weatherData } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header">
            {
              fetchingData ?
              <img src={logo} className="App-logo" alt="logo" />
              :
              <div>
                <Navbar />
              <CurrentForecast forecast= {weatherData.currently} />
              </div>
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
