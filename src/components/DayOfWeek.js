import React, {PropTypes} from 'react';

const dayofWeek = ["Sun", "Mon","Tue", "Wed","Thur", "Fri","Sat"];

const DayOfWeek = ({date}) => (
  <span>{dayofWeek[new Date(date).getDay()]}</span>
)

const {string} = PropTypes;
DayOfWeek.propTypes = {
  date: string.isRequired
}

export default DayOfWeek;
