import React from 'react';
import WeatherIcon from './WeatherIcon';

class Forecast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      forecast:null
    }
  }

  componentDidMount(){
    const OWM_API_KEY= process.env.REACT_APP_OWM_API_KEY;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London,us&units=metric&appid=${OWM_API_KEY}`)
      .then(res => res.json())
      .then((json) => this.setState({
        forecast:json
      }))

  }

  render(){
    const {forecast} = this.state;

    if(!forecast){
      return (
        <div>
          Loading...
        </div>
      )
    }

    const {city, list} = forecast;
    const todayForecast = list[0];
    const todayWeather = todayForecast.weather[0]

    return (
      <div>
        <CityName city={city.name} country={city.country} />
        <TodayForecast
          description={todayWeather.description}
          icon={todayWeather.icon}
          temp={todayForecast.main.temp}
        />
        {list.map((f,i) => (
          <div key={i} style={{margin:"0 5px 15px 0", display:"inline-block"}} >
            <SmallForecast
              description={f.weather[0].description}
              icon={f.weather[0].icon}
              temp={f.main.temp}
              date={f.dt_txt}
            />
          </div>
        ))}
      </div>
    )
  }

}

export default Forecast;

const CityName = ({city, country}) => (
  <div style={{fontSize:"15px"}} >
    {city}, {country}
  </div>
)

const TodayForecast = ({description, icon, temp}) => (
  <div style={{verticalAlgn:"top"}}  >
    <div>{description}</div>
    <WeatherIcon style={{height:"80px",display:"block", float:"left"}} icon={icon} description={description} />
    <Temperature style={{fontSize:"30px", display:"block", height:"80px",padding:"15px 0px",float:"left"}} value={temp} />
    <div style={{clear:"both"}} ></div>
  </div>
)

const SmallForecast = ({description, icon, temp, date}) => (
  <div style={{verticalAlgn:"top", textAlign:"center", display:"inline-block"}}  >
    <div><DayOfWeek date={date} /></div>
    <div><Hours date={date} /></div>
    <WeatherIcon style={{height:"40px"}} icon={icon} description={description} />
    <div ><Temperature value={temp} /></div>
  </div>
)


const dayofWeek = ["Sun", "Mon","Tue", "Wed","Thur", "Fri","Sat"]
const DayOfWeek = ({date}) => (
  <span>{dayofWeek[new Date(date).getDay()]}</span>
)

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

const Temperature = ({value, style}) => (
  <span style={style} >
    {Math.floor(value)}<sup>°</sup>
  </span>
)
