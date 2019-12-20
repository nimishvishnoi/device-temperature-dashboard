import React from 'react';
import _ from 'lodash';

function AvgTemHourly(props) {
    var avgtemp = _.map(_.map(_.groupBy(_.map(props.data, p => { return { device_name: p.device_display_name, temp_reading: p.reading, timeinhrs: (new Date(p.time)).getHours() } }), 'timeinhrs'), v => _.groupBy(v, 'device_name')), b => _.map(b, a => { return { device_name: a[0].device_name, mean_reading: _.meanBy(a, p => p.temp_reading), timeinhrs: a[0].timeinhrs } }))
    return (
        <div style={{borderStyle:'solid'}}>
            <h3 style={{textAlign:'center'}}>Average Hourly Temprature</h3>
            <ul style={{listStyleType:'none'}}>
                {
                    avgtemp.map((val) =>
<li key={val[0].timeinhrs}><b style={{color:'red'}}>{val[0].timeinhrs} - {val[0].timeinhrs+1}</b><ul style={{listStyleType:'none',marginLeft:'-60px'}}> {val.map((avg)=><li key={avg.device_name}><b>{avg.device_name}</b> {avg.mean_reading}</li>)}</ul></li>
                    )
                }
            </ul>
        </div>
    )
}

export default AvgTemHourly;