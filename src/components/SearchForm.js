import React, { useRef } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';

const API_KEY = '6539aac64302497bbdb54421201505';

const style = {
    input: {
        color: '#fff',
        fontWeight: 300,
        fontSize: '20px'
    }
}

export default props => {
    let inputField = useRef();

    const getWeather = e => {
        e.preventDefault();
        inputField.value &&
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${inputField.value}&days=3`)
            .then(res => props.weatherToState(res.data));
        inputField.value = '';
    }

    return (
        <form onSubmit={getWeather}>                
            <Input
                placeholder="Search location…"
                style={style.input}
                autoFocus
                inputProps={{ 'ref': e => inputField = e }}
            />
        </form>
    )
}