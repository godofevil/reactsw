import React from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const style = {
    weatherMore: {
        fontWeight: 300
    }
}

class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: false
        }
    }

    showMore = () => this.setState({expand: !this.state.expand})

    render() {

        const current = this.props.data;        
        return (
            <div>
                <img src={current.condition.icon} alt="weather-icon" />
                <Typography color="primary" variant="h4">
                    {current.temp_c}&deg; <br />
                    {current.condition.text}                    
                </Typography>

                <IconButton onClick={this.showMore}>
                    { this.state.expand ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                </IconButton>

                <Collapse in={this.state.expand} timeout="auto">
                    <Typography style={style.weatherMore} color="primary" variant="h6">
                        Feels like: {current.feelslike_c}&deg; <br />
                        Humidity: {current.humidity}% <br />
                        Cloud: {current.cloud}% <br />
                        Wind speed: {current.wind_kph} <br />
                        Wind direction: {current.wind_dir} <br />
                    </Typography>
                </Collapse>
            </div>
        )
    }
}

export default CurrentWeather