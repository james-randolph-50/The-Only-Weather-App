import React from 'react';
import moment from 'moment';

const HourlyForecast =({ forecastData }) => {
    const renderForecasts = forecastData.map(({ apparentTemperature, humidity, precipProbability, summary, temperature, time }, index) => 
    <div key={index} style={{ border: 'solid 1px blue', padding: '10px', margin: '16px' }}>
      <h3>{summary}</h3>
        <p>{moment.unix(time).format('MMMM Do YYYY, h:mm a')}</p>
        <p>Temperature: {Math.round(temperature)}</p>
        <p>Feels Like: {Math.round(apparentTemperature)}</p>
        <p>Chance of Percipitation: {precipProbability}%</p>
        <p>Humidity: {humidity}</p>
    </div>
    )
    return (
        <div>
        <h2>Hourly Forecast</h2>
            {renderForecasts}
        </div>
    )
} 

export default HourlyForecast