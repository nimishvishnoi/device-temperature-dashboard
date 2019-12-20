import React from 'react';

function SelectOptions(props){
    return(
        <select onChange={props.onselectChange} value={props.value}>
            <option value=''>Select {props.select}</option>
            {props.options.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
    );
}

export default SelectOptions;
