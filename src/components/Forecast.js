import React from 'react';
import moment from 'moment';

const Forecast = ({ forecast: { apparentTemperature, humidity, precipProbability, summary, temperature, time }}) => 
<div>
    <div style={{ border: 'solid 1px blue', padding: '10px', margin: '16px' }}>
        <h3>{summary}</h3>
        <p>{moment.unix(time).format('MMMM Do YYYY, h:mm a')}</p>
        <p>Temperature: {Math.round(temperature)}</p>
        <p>Feels Like: {Math.round(apparentTemperature)}</p>
        <p>Chance of Percipitation: {precipProbability}%</p>
        <p>Humidity: {humidity}</p>
    </div>

</div>


export default Forecast