import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';
import SelectOptions from './Components/SelectOptions';
import EchartsPlot from './Components/EchartsPlot';
import CurrentTemprature from './Components/CurrentTemprature';
import AvgTemp from './Components/AvgTemp';
import DeviceTable from './Components/DeviceTable';
import AvgTemHourly from './Components/AvgTemHourly';


function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState('');
  const [device, setDevice] = useState('');
  const [newdata, setNewdata] = useState([]);

  function onTypeChange(event) {
    setType(event.target.value)
    setDevice('')
    if (event.target.value !== '')
      setNewdata(_.filter(data, ['device_type', event.target.value]))
    else
      setNewdata(data)
  }

  function onDeviceChange(event) {
    setDevice(event.target.value);
    if (type !== '' && event.target.value !== '')
      setNewdata(_.filter(data, { 'device_type': type, 'device_display_name': event.target.value }))
    else if (event.target.value !== '') {
      setNewdata(_.filter(data, ['device_display_name', event.target.value]))
      setType('')
    }
    else if (type !== '')
      setNewdata(_.filter(data, ['device_type', type]))
    else {
      setNewdata(data)
      setType('')
    }
  }

  const setJson = () => {
    axios.get('/sample_data.json')
      .then(res => {
        const data = res.data;
        setData(data.data);
        setNewdata(data.data);
      })
  }

  useEffect(() => {
    setJson();
  }, []);


  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Zenatix Assignment</h1>
      <div>
        <h3>Filters</h3>
        <SelectOptions onselectChange={onTypeChange} value={type} select='Type' options={_.uniq(_.map(data, 'device_type'))} />
        <SelectOptions onselectChange={onDeviceChange} value={device} select='Device' options={_.uniq(_.map(newdata, 'device_display_name'))} />
      </div>
      <br/>
      <EchartsPlot data={_.sortBy(newdata, dtime => { return new Date(dtime.time) })} />
      <div className="widgets">
        <div className="hourlyavg">
          <AvgTemHourly data={data} />
        </div>
        <div className="devices">
          <DeviceTable devices={_.uniqBy(data, v => [v.device_display_name, v.device_type].join())} />
        </div>
        <div className="avgtemps">
          <AvgTemp heading='Avg Temp per display' avgtemp={_.map(_.groupBy(data, 'device_display_name'), v => { return { device_name: v[0].device_display_name, mean_reading: _.meanBy(v, p => p.reading) } })} />
          <CurrentTemprature data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
