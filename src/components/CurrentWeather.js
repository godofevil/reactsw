import React, { useState } from 'react';
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

export default props => {

    const [expand, setExpand] = useState(false);

    const current = props.data;

    return (
        <div>
            <img src={current.condition.icon} alt="weather-icon" />
            <Typography color="primary" variant="h4">
                {current.temp_c}&deg; <br />
                {current.condition.text}                    
            </Typography>

            <IconButton onClick={() => setExpand(!expand)}>
                { expand ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
            </IconButton>

            <Collapse in={expand} timeout="auto">
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