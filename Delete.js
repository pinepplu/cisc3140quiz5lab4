import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Get.css';
import { Button, Form, Container } from 'react-bootstrap';


function Delete() {
    return (
        <div className="DeleteEntry">
            <header className='header'>
                <h1>Delete</h1>
            </header>
            <Container Fluid>
                <Form>
                    <div className='input'>
                        <Form.Group controlId='deleteForm'>
                            <Form.Label >Input ID</Form.Label>
                            <Form.Control required placeholder="input squirrel id"></Form.Control>
                        </Form.Group>
                        <Button className='submitbtn' variant='success' type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Delete

/* <div>
                        <Table bordered hover>
                            <thead className='tblheader'>
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
                    </div> */