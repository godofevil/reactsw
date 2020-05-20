import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Brightness5SharpIcon from '@material-ui/icons/Brightness5Sharp';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';

const style = {
    paper: {
        textAlign: 'center',
        color: '#3f51b5'
    }
}

const convertDate = date => new Date(date).
    toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    })

export default props => {
    const data = props.data;
    
    return (
        <Grid item xs={12} md={3}>
            <Paper style={style.paper} >
                <Typography variant="h5">                        
                    {convertDate(data.date)} <br />
                    {data.day.condition.text}
                </Typography>
                <img src={data.day.condition.icon} alt="Forecast Icon"/>
                <Typography color="primary" variant="h6">                         
                    <ArrowUpwardSharpIcon /> {data.day.maxtemp_c}&deg; <br />
                    <ArrowDownwardSharpIcon /> {data.day.mintemp_c}&deg; <br />
                    <Brightness5SharpIcon />  {data.astro.sunrise} <br />
                    <Brightness5SharpIcon /> {data.astro.sunset}
                </Typography>
            </Paper>
        </Grid>
    )
}
