import React from 'react';

import SmallForecast from './SmallForecast';
import CityName from './CityName';
import TodayForecast from './TodayForecast'

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
