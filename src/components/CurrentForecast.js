import React from 'react';

const CurrentForecast = ({ forecast: { apparentTemperature, humidity, precipProbability, summary, temperature }}) => 
<div>
    <h2>Current Forecast</h2>
    <div style={{ border: 'solid 1px blue', padding: '10px', margin: '16px' }}>
        <h3>{summary}</h3>
        <p>{temperature}</p>
    </div>

</div>


export default CurrentForecast