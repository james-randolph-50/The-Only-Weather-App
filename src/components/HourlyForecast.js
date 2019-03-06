import React from 'react';
import moment from 'moment';

const HourlyForecast =({ forecastData }) => {
    const renderForecasts = forecastData.map(({ precipIntensity, precipProbability, time }, index) => 
    <div key={index} style={{ border: 'solid 1px blue', padding: '10px', margin: '16px' }}>
        <p>{moment.unix(time).format('LT')}</p>
        <p>Intensity of Percipitation: {precipIntensity}%</p>
        <p>Chance of Percipitation: {precipProbability}%</p>

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