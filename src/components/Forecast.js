import React from 'react';
import ForecastItem from './ForecastItem';
import Grid from '@material-ui/core/Grid';

class Forecast extends React.Component {
    render() {        
        const data = this.props.data;
        data.forecastday.shift();        
        return (
            <Grid 
                container
                item 
                xs={12} 
                spacing={3}                 
                justify="center"
            >
                { data.forecastday.map(item => <ForecastItem key={item.date} data={item} />) }
            </Grid>
        )
    }
}

export default Forecast