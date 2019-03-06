import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import './App.css';
import CurrentForecast from './components/CurrentForecast'
import MinutelyForecast from './components/MinutelyForecast'

import Navbar from './components/Navbar'


const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

      this.state = {
        fetchingData: true,
        weatherData: {},
        forecastKey: 'currently'
      }
  }

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

  handleForecastChange = forecastKey => this.setState({ forecastKey: forecastKey })

  render() {
    const { fetchingData, weatherData, forecastKey } = this.state
    
    const forecast = weatherData[forecastKey]
    
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header">
            {
              fetchingData ?
              <img src={logo} className="App-logo" alt="logo" />
              :
              <div>
                <Navbar changeForecast={this.handleForecastChange}/>
                {forecastKey === 'currently' && <CurrentForecast forecast={forecast} />}
                {forecastKey === 'minutely' && <MinutelyForecast forecastData={forecast.data} />}
                
              </div>
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
