import React from 'react';

function DeviceTable(props) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Device</th>
                    <th>Device Type</th>
                </tr>
            </thead>
            <tbody>
                {props.devices.map((val,i) =>
                    <tr key={i}>
                        <td>{val.device_display_name}</td>
                        <td>{val.device_type}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default DeviceTable;