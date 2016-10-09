import React from 'react';

const num2Str = (hour) => {
  let _h = hour+""
  if(_h.length < 2 )
    _h = "0"+_h

  return _h
}

const Hours = ({date}) => {
  const _date = new Date(date);
  return (
    <span>{num2Str(_date.getHours())}:{num2Str(_date.getMinutes())}</span>
  )

}

export default Hours;
