import React from 'react';
import { storiesOf} from '@kadira/storybook';

import CityName from '../components/CityName';
import TodayForecast from '../components/TodayForecast';
import SmallForecast from '../components/SmallForecast';


storiesOf('CityName', module)
  .add('London', () => (
    <CityName city="London" country="uk" />
  ))
  .add('Rome', () => (
    <CityName city="Rome" country="it" />
  ));


storiesOf('TodayForecast', module)
  .add('Forecast 1', () => (
    <TodayForecast description="clear sky" icon="01n" temp={18.44} />
  ))
  .add('Forecast 2', () => (
    <TodayForecast description="few clouds" icon="02d" temp={19.44} />
  ));

storiesOf('SmallForecast', module)
  .add('SmallForecast 1', () => (
    <SmallForecast description="clear sky" icon="01n" temp={18.44} date="2016-09-09 23:00:00" />
  ))
  .add('SmallForecast 2', () => (
    <SmallForecast description="few clouds" icon="02d" temp={19.44} date="2016-10-10 12:00:00" />
  ));
