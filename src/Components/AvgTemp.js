import React from 'react';
import StatsCard from './StatsCard/StatsCard';

function AvgTemp(props) {
    const color = props.heading === 'Avg Temp per display' ? '1px solid red' : '1px solid green';
    return (
        <div>
            <h3>{props.heading}</h3>
            <div className='row'>
                {props.avgtemp.map((val) =>
                    <div className='col-6' key={val.device_name}>
                        <StatsCard
                            color={color}
                            statsText={val.device_name}
                            statsValue={val.mean_reading}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default AvgTemp;