import React from 'react';
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

class SearchForm extends React.Component {

    getWeather = e => {
        e.preventDefault();
        this.inputField.value &&
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${this.inputField.value}&days=3`)
            .then(res => this.props.weatherToState(res.data));
        this.inputField.value = '';
    }

    render() {
        return (
            <form onSubmit={this.getWeather}>                
                <Input
                    placeholder="Search location…"
                    style={style.input}
                    autoFocus
                    inputProps={{ 'ref': e => this.inputField = e }}
                />
            </form>
        )
    }
}

export default SearchForm