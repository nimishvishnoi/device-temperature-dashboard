import React from 'react';

function AvgTemp(props) {
    return (
        <div style={{borderStyle:'solid'}}>
            <h3 style={{textAlign: 'center'}}>{props.heading}</h3>
            <ul style={{listStyleType:'none'}}>{props.avgtemp.map((val) =>
                <li key={val.device_name}><b>{val.device_name}</b> {val.mean_reading}</li>
            )}</ul>
        </div>
    )
}

export default AvgTemp;