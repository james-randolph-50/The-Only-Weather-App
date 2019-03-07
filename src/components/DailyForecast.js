import React from 'react';
import moment from 'moment';

const DailyForecast =({ forecastData }) => {
    const renderForecasts = forecastData.map(({ apparentTemperatureMax, apparentTemperatureMin, precipProbability, humidity, summary, temperatureMax, temperatureMin, sunriseTime, sunsetTime, time }, index) => 
    <div key={index} style={{ border: 'solid 1px blue', padding: '10px', margin: '16px' }}>
        <p>{moment.unix(time).format('LL')}</p>
        <h4>{summary}</h4>
        <p>High: {temperatureMax}</p>
        <p>Low: {temperatureMin}</p>
        <p>Feels Like High: {apparentTemperatureMax}</p>
        <p>Feels Like Low: {apparentTemperatureMin}</p>
        <p>Humidity: {Math.round(humidity  * 100})%</p>
        <p>Chance of Percipitation: {Math.round(precipProbability * 100})%</p>
        <p>Sunrise: {moment.unix(sunriseTime).format('h:mm a')}</p>
        <p>Sunset: {moment.unix(sunsetTime).format('h:mm a')}</p>

    </div>
    )
    return (
        <div>
        <h2>Daily Forecast</h2>
            {renderForecasts}
        </div>
    )
} 

export default DailyForecast