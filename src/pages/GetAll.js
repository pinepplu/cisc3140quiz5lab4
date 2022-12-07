import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap';
import '../styles/GetAll.css';

function GetAll() {
    return (
        <div className="GetAll">
            <header className="header">
                <h1>All Data</h1>
            </header>
            <Table bordered hover>
                <thead className='tablehead'>
                    <tr>
                        <th>Active Time</th>
                        <th>Color</th>
                        <th>Quad Location</th>
                        <th>Size</th>
                        <th>Gender</th>
                        <th>Squirrel ID</th>
                        <th>Age</th>
                        <th>Building Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AM</td>
                        <td>brown</td>
                        <td>West</td>
                        <td>Large</td>
                        <td>Male</td>
                        <td>0058</td>
                        <td>Juvenile</td>
                        <td>WEB</td>
                    </tr>
                    <tr>
                        <td>AM</td>
                        <td>black</td>
                        <td>East</td>
                        <td>Small</td>
                        <td>Female</td>
                        <td>0087</td>
                        <td>Adult</td>
                        <td>Whitehead</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default GetAll