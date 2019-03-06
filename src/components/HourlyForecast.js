import React from 'react';
import Forecast from './Forecast'

const HourlyForecast =({ forecastData }) => {

    return (
        <div>
        <h2>Hourly Forecast</h2>
            {renderForecasts}
        </div>
    )
} 

export default HourlyForecast