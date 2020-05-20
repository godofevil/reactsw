import React from 'react';
import ForecastItem from './ForecastItem';
import Grid from '@material-ui/core/Grid';

export default props => {
    const data = props.data;
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