import React from 'react';
import _ from 'lodash';
import StatsCard from './StatsCard/StatsCard';
import {Tab,Tabs} from 'react-bootstrap';

function AvgTemHourly(props) {
    const avgtemp = _.map(_.map(_.groupBy(_.map(props.data, p => { return { device_name: p.device_display_name, temp_reading: p.reading, timeinhrs: (new Date(p.time)).getHours() } }), 'timeinhrs'), v => _.groupBy(v, 'device_name')), b => _.map(b, a => { return { device_name: a[0].device_name, mean_reading: _.meanBy(a, p => p.temp_reading), timeinhrs: a[0].timeinhrs } }))
    

    return (
        <div>
            <h3>Average Hourly Temprature</h3>
            <Tabs id="uncontrolled-tab-example">
 
                {
                    avgtemp.map((val) =>
                        <Tab key={val[0].timeinhrs} eventKey={val[0].timeinhrs} title={val[0].timeinhrs +'-'+ (val[0].timeinhrs + 1)}>
                            <div className='row'>
                                {val.map((avg) =>
                                    <div className='col-6' key={avg.device_name}>
                                    <StatsCard
                                        statsText={avg.device_name}
                                        statsValue={avg.mean_reading}
                                    />
                                </div>
                                )}
                            </div>
                        </Tab>
                    )
                }
            </Tabs>

        </div>
    )
}

export default AvgTemHourly;