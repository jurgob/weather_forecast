import React, {PropTypes} from 'react';

const iconStyle={
  lineHeight:"0"
}

const WeatherIcon = ({icon,description,style}) => (
  <img
    style={{
      ...iconStyle,
      ...style
    }}
    src={`http://openweathermap.org/img/w/${icon}.png`}
    alt={description}
  />
)



const {string,object} = PropTypes

WeatherIcon.PropTypes = {
  icon: string.isRequired,
  description: string.isRequired,
  style:object
}


export default WeatherIcon
