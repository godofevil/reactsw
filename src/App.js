import React from 'react';
import WeatherContainer from './components/WeatherContainer';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			weatherData: {}
		}
	}
	
	weatherToState = weatherData => this.setState({weatherData})

	render() {
		return (
			<div className="App">					
				<Header weatherToState={this.weatherToState}/>
				{
					Object.keys(this.state.weatherData).length ?
					<WeatherContainer data={this.state.weatherData} /> : 
					null
				}
				{console.log(this.state.weatherData)}
			</div>
		)
	}
}

export default App;
