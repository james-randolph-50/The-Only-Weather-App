import React from 'react';
import moment from 'moment';

const DailyForecast =({ forecastData }) => {
    const renderForecasts = forecastData.map(({ precipIntensity, precipProbability, time }, index) => 
    <div key={index} style={{ border: 'solid 1px blue', padding: '10px', margin: '16px' }}>
        <p>{moment.unix(time).format('MMMM Do YYYY, h:mm a')}</p>
        <p>Intensity of Percipitation: {precipIntensity}%</p>
        <p>Chance of Percipitation: {precipProbability}%</p>

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