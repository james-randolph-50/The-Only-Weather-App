import React from 'react';

const Navbar = ({ changeForecast }) => 
<div>
    <button className="navbar-btn" onClick={() => changeForecast('currently')}>Current</button>
    <button className="navbar-btn" onClick={() => changeForecast('minutely')}>Minutely</button>
    <button className="navbar-btn" onClick={() => changeForecast('hourly')}>Hourly</button>
    <button className="navbar-btn" onClick={() => changeForecast('daily')}>Daily</button>

</div>

export default Navbar