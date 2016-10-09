import React, {PropTypes} from 'react';
import WeatherIcon from './WeatherIcon';
import Hours from './Hours';
import DayOfWeek from './DayOfWeek'
import Temperature from './Temperature';

const SmallForecast = ({description, icon, temp, date}) => (
  <div style={{verticalAlgn:"top", textAlign:"center", display:"inline-block"}}  >
    <div><DayOfWeek date={date} /></div>
    <div><Hours date={date} /></div>
    <WeatherIcon style={{height:"40px"}} icon={icon} description={description} />
    <div ><Temperature value={temp} /></div>
  </div>
)

const {string,number} = PropTypes;
SmallForecast.propTypes = {
  description: string.isRequired,
  icon:  string.isRequired,
  temp: number.isRequired,
  date: string.isRequired
}

export default SmallForecast;
