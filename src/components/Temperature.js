import React from 'react';

const Temperature = ({value, style}) => (
  <span style={style} >
    {Math.floor(value)}<sup>°</sup>
  </span>
)

export default Temperature;
