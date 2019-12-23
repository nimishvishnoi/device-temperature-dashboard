import React from 'react';
import {Table} from 'react-bootstrap';

function DeviceTable(props) {
    return (
        <div>
            <h3>Devices with Device Type</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Device</th>
                        <th>Device Type</th>
                    </tr>
                </thead>
                <tbody>
                    {props.devices.map((val, i) =>
                        <tr key={i}>
                            <td>{val.device_display_name}</td>
                            <td>{val.device_type}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default DeviceTable;