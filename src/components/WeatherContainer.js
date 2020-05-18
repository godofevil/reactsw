import React from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const style = {
    container: {
        padding: '20px'
    },
    paper: {
        padding: '20px',
        textAlign: 'center'
    }
}

export default props => {
    const data = props.data;
    return <Container maxWidth="xl" fixed style={style.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={6}>
                        <Paper style={style.paper} elevation={3}>
                            <Typography variant="h3">
                                {data.location.name}, {data.location.country}
                            </Typography>
                            <CurrentWeather data={data.current}/>
                        </Paper>
                    </Grid>                    
                    <Forecast data={data.forecast}/>
                </Grid>
            </Container>            
}