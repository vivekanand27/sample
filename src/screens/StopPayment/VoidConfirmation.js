import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form,  Button, Row, Col } from 'react-bootstrap'


const VoidConfirmation = ({ match, history }) => {

    useEffect(() => {
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <>
            {/* <FormContainer> */}
            <center>
                <h5 className='py-2'>STOP PAYMENT/VOID CONFIRMATION</h5>        </center>

            <Form onSubmit={submitHandler} className='py-2'>               
                <Form.Row>
                    <Form.Group xs={6} as={Col} controlId='employeeid'>
                        <Form.Label>Control Number:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Control Number'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group xs={6} as={Col} controlId='department'>
                        <Form.Label>Vendor Number:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Vendor Number'
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>
                    <Form.Row>                       
                
                    <Form.Group xs={6} as={Col} controlId='date'>
                        <Form.Label>Vendor Name:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Vendor Name'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group xs={6} as={Col} controlId='time'>
                        <Form.Label>Bank Code:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder=' Bank Code'
                        ></Form.Control>
                    </Form.Group>

                </Form.Row>

                <Form.Row>

                    <Form.Group xs={6} as={Col} controlId='date'>
                        <Form.Label>Check Number:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Check Number'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group xs={6} as={Col} controlId='time'>
                        <Form.Label>Check Date:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Check Date'
                        ></Form.Control>
                    </Form.Group>

                </Form.Row>

                <Form.Row>

                    <Form.Group xs={6} as={Col} controlId='date'>
                        <Form.Label>Check Amount:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Check Amount'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group xs={6} as={Col} controlId='time'>
                        <Form.Label>Reason:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Reason'
                        ></Form.Control>
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Form.Group xs={6} as={Col} controlId='date'>
                        <Form.Label>Stop Action:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Stop Action'
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group xs={6} as={Col} controlId='time'>
                        <Form.Label>Request Copy:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Request Copy'
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group xs={6} as={Col} controlId='date'>
                        <Form.Label>Status:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Status'
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group xs={6} as={Col} controlId='time'>
                        <Form.Label>Status Comment:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Status Comment'
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group xs={6} as={Col} controlId='date'>
                        <Form.Label>Abandoned Property:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Abandoned Property'
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group xs={6} as={Col} controlId='time'>
                        <Form.Label>Selected Approver:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Selected Approver'
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group xs={6} as={Col} controlId='date'>
                        <Form.Label>Requested By:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Requested By'
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group xs={6} as={Col} controlId='time'>
                        <Form.Label>Requested Date:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Requested Date'
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group xs={12} as={Col} controlId='date'>
                        <Form.Label>Comments:</Form.Label>
                        <Form.Control 
                            as="textarea" rows={3}
                            placeholder='Comments'
                        ></Form.Control>
                    </Form.Group>                   
                </Form.Row>


                <Form.Group as={Row} controlId='department'>
                    <Col>
                        <center>
                            <Button type='submit' variant='primary'>Submit</Button>
                            {' '}
                            <Link to='/' className='btn btn-danger'>Cancel</Link>
                        </center>
                    </Col>
                </Form.Group>

            </Form>

        </>
    );
}

export default VoidConfirmation

