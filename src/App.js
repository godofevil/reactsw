import React, { useState } from 'react';
import WeatherContainer from './components/WeatherContainer';
import Header from './components/Header';

export default props => {

	const [weatherData, weatherToState] = useState([]);
	
	return (
		<div className="App">					
			<Header weatherToState={data => weatherToState(data)}/>
			{
				Object.keys(weatherData).length ?
				<WeatherContainer data={weatherData} /> : 
				null
			}
		</div>
	)
}