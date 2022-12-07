import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Container } from 'react-bootstrap';
import '../styles/Get.css';

function Get() {
    return (
        <div className="GetById">
            <header className='header'>
                <h1>Get</h1>
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

export default Get