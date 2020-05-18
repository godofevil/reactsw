import React from 'react';
import SearchForm from './SearchForm';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import logo from './../logo.svg';
import Grid from '@material-ui/core/Grid'

const style = {
    appbar: {
        background: indigo.A200,
        padding: '5px'
    },
    title: {
        fontFamily: "'Yellowtail', cursive",
        color: indigo[50],
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        width: '10vmin'
    }
}

export default props => <AppBar style={style.appbar} position="static">                            
                                <Grid container spacing={1} alignItems="center" justify="space-between">
                                    <Grid item>
                                        <Typography variant="h4" style={style.title} noWrap>
                                        <img style={style.logo} src={logo} />                                    
                                            React Simple Weather
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <SearchForm weatherToState={props.weatherToState} />                                        
                                    </Grid>
                                </Grid>
                        </AppBar>