import React, { useEffect } from 'react';
import { Jumbotron, Container, Table, Row, Col, Button } from 'react-bootstrap'

const HomeScreen = ({ match }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* <Sidebar /> */}
            <Jumbotron fluid>
                <Container>
                    <h3>Welcome to Stop Payment Station
</h3>
                    <p className="py-2">
                        Stop payments are placed when a check is in circulation and should not be paid.
                        Financial Control is in charge of this task and does it once daily at 2 p.m.
                        Checks are stopped for a number of reasons; duplicate payments, wrong amounts,
                        wrong vendor, or a customer was paid with cash, are a few examples.
                        If you have any check related questions, please contact <a href="/">Financial Control</a>.

    </p>
                </Container>
            </Jumbotron>

            <Row className="align-items-center">
                <Col md={2}></Col>
              
               
                <Col md={8}>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th className='centerItem'>Oracle Request</th>
                                <th className='centerItem'>People Soft Request  <br /> <small>(Checks dated before 06/27/2009)</small></th>
                                <th className='centerItem'>Invoice Close Requests</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='centerItem'> <Button variant="primary">New Request</Button></td>
                                <td className='centerItem'><Button variant="primary">New Request</Button></td>
                                <td className='centerItem'><Button variant="primary">Invoice Close</Button></td>
                            </tr>
                        </tbody>
                    </Table>

                </Col>
                <Col md={2}></Col>
            </Row>
           
        </>
    )
}

export default HomeScreen