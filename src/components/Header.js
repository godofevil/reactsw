import React from 'react';
import SearchForm from './SearchForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import logo from './../logo.svg';

const style = {
    appbar: {
        background: indigo.A200,
        padding: '5px'
    },
    title: {
        fontFamily: "'Yellowtail', cursive",
        color: indigo[50],
        flexGrow: 1,
    },
    logo: {
        width: '4vmax'
    }
}

export default props => <AppBar style={style.appbar} position="static">
                            <Toolbar>
                                <img style={style.logo} src={logo} />
                                <Typography xs={12} variant="h4" style={style.title}>
                                    React Simple Weather
                                </Typography>
                                <SearchForm xs={12} weatherToState={props.weatherToState} />
                            </Toolbar>
                        </AppBar>