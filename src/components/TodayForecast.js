import React, {PropTypes} from 'react';
import WeatherIcon from './WeatherIcon';
import Temperature from './Temperature';

const TodayForecast = ({description, icon, temp}) => (
  <div style={{verticalAlgn:"top"}}  >
    <div>{description}</div>
    <WeatherIcon style={{height:"80px",display:"block", float:"left"}} icon={icon} description={description} />
    <Temperature style={{fontSize:"30px", display:"block", height:"80px",padding:"15px 0px",float:"left"}} value={temp} />
    <div style={{clear:"both"}} ></div>
  </div>
)

const {string,number} = PropTypes
TodayForecast.propTypes = {
  description: string.isRequired,
  icon: string.isRequired,
  temp: number.isRequired
}

export default TodayForecast;
