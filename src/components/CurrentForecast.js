import React from 'react';
import moment from 'moment';

const CurrentForecast = ({ forecast: { apparentTemperature, humidity, precipProbability, summary, temperature, time }}) => 
<div>
    <h2>Current Forecast</h2>
    <div style={{ border: 'solid 1px blue', padding: '10px', margin: '16px' }}>
        <h3>{summary}</h3>
        <p>{moment.unix(time).format('dddd, MMMM do, YYYY h:mm:ss: A')}</p>
        <p>Temperature: {Math.round(temperature)}</p>
        <p>Feels Like: {Math.round(apparentTemperature)}</p>
        <p>Chance of Percipitation: {precipProbability}%</p>
        <p>Humidity: {humidity}</p>
    </div>

</div>


export default CurrentForecast