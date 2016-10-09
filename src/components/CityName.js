import React, {PropTypes} from 'react';

const CityName = ({city, country}) => (
  <div style={{fontSize:"15px"}} >
    {city}, {country}
  </div>
)

const {string} = PropTypes;
CityName.propTypes = {
  city:string.isRequired,
  country:string.isRequired
}

export default CityName;
