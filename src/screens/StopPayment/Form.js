// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Form, Table, Button, Row, Col } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import Message from '../../components/Message'
// import { MessageType } from '../../constants/messageConstants';
// import Loader from '../../components/Loader'
// import FormContainer from '../../components/FormContainer'

// const VoidConfirmation = ({ match, history }) => {


//     const data = [
//         { _id: '1', processType: "type 1", step: "step 1", status: "status 1", date: "23/05/2021", time: "12:00", user: "vivek", department: "dep1", associates: '5' },
//         { _id: '2', processType: "type 2", step: "step 2", status: "status 2", date: "23/05/2021", time: "12:00", user: "vivek", department: "dep2", associates: '74' },
//         { _id: '3', processType: "type 3", step: "step 3", status: "status 3", date: "23/05/2021", time: "12:00", user: "vivek", department: "dep1", associates: '45' },
//         { _id: '4', processType: "type 3", step: "step 4", status: "status 4", date: "23/05/2021", time: "12:00", user: "vivek", department: "dep3", associates: '65' },
//         { _id: '5', processType: "type 4", step: "step 2", status: "status 3", date: "23/05/2021", time: "12:00", user: "vivek", department: "dep1", associates: '84' },
//         { _id: '6', processType: "type 5", step: "step 1", status: "status 2", date: "23/05/2021", time: "12:00", user: "vivek", department: "dep3", associates: '27' },
//         { _id: '7', processType: "type 1", step: "step 2", status: "status 1", date: "23/05/2021", time: "12:00", user: "vivek", department: "dep2", associates: '98' }
//     ]

//     // const dispatch = useDispatch()

//     // const brandDetails = useSelector((state) => state.brandDetails)
//     // const { loading, error, brand } = brandDetails

//     // const brandUpdate = useSelector((state) => state.brandUpdate)
//     // const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = brandUpdate

//     // const brandList = useSelector((state) => state.brandList)
//     // const { brands } = brandList

//     useEffect(() => {
//         // if (successUpdate) {
//         //     dispatch({ type: brandConstants.BRAND_UPDATE_RESET });
//         //     history.push('/brand')
//         // } else {
//         //     if (!brand.name || brand._id !== brandId) {
//         //         dispatch(brandActions.listBrandDetails(brandId));
//         //     } else {
//         //         const brand = brands.filter(c => c._id === brandId )
//         //         if(brand.length > 0){
//         //             setName(brand[0].name);
//         //         } else {
//         //             setName(brand.name);
//         //         }

//         //     }
//         // }
//     }, [])

//     const submitHandler = (e) => {
//         e.preventDefault();
//         // dispatch(brandActions.updateBrand({
//         //     _id: brandId,
//         //     name
//         // }))
//     }

//     return (
//         <>
//             {/* <FormContainer> */}
//             <center>
//                 <h4>Process Search</h4>        </center>

//             {false ? (
//                 <Loader />
//             ) : false ? (
//                 <Message variant={MessageType.ERROR}>Error</Message>
//             ) : (
//                 <Form onSubmit={submitHandler}>
//                     <Form.Row>
//                         <Form.Group xs={3} as={Col} controlId='name'>
//                             <Form.Label >Process Type</Form.Label>
//                             <Form.Control size="sm" as="select" defaultValue="Select Process Type">
//                                 <option>Select Process Type</option>
//                                 <option>Process Type 1</option>
//                                 <option>Process Type 2</option>
//                                 <option>Process Type 3</option>
//                                 <option>Process Type 4</option>
//                                 <option>Process Type 5</option>
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group xs={3} as={Col} controlId='step'>
//                             <Form.Label>Step</Form.Label>
//                             <Form.Control size="sm" as="select" defaultValue="Select Step">
//                                 <option>Select Step</option>
//                                 <option>Step 1</option>
//                                 <option>Step 2</option>
//                                 <option>Step 3</option>
//                                 <option>Step 4</option>
//                                 <option>Step 5</option>
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group xs={3} as={Col} controlId='status'>
//                             <Form.Label>Status</Form.Label>
//                             <Form.Control size="sm" as="select" defaultValue="Select Status">
//                                 <option>Select Status</option>
//                                 <option>Status 1</option>
//                                 <option>Status 2</option>
//                                 <option>Status 3</option>
//                                 <option>Status 4</option>
//                                 <option>Status 5</option>
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group xs={3} as={Col} controlId='department'>
//                             <Form.Label>Department</Form.Label>
//                             <Form.Control size="sm" as="select" defaultValue="Select Department">
//                                 <option>Select Department</option>
//                                 <option>Department 1</option>
//                                 <option>Department 2</option>
//                                 <option>Department 3</option>
//                                 <option>Department 4</option>
//                                 <option>Department 5</option>
//                             </Form.Control>
//                         </Form.Group>
//                     </Form.Row>


//                     <Form.Row>



//                         <Form.Group xs={3} as={Col} controlId='employeeid'>
//                             <Form.Label>Employee Id</Form.Label>
//                             <Form.Control size="sm"
//                                 type='text'
//                                 placeholder='Employee Id'
//                             ></Form.Control>
//                         </Form.Group>

//                         <Form.Group xs={3} as={Col} controlId='department'>
//                             <Form.Label>No. of Associates Processed</Form.Label>
//                             <Form.Control size="sm"
//                                 type='text'
//                                 placeholder='No. of Associates Processed'
//                             ></Form.Control>
//                         </Form.Group>


//                         <Form.Group xs={3} as={Col} controlId='date'>
//                             <Form.Label>Date</Form.Label>
//                             <Form.Control size="sm"
//                                 type='text'
//                                 placeholder='DD/MM/YYYY'
//                             ></Form.Control>
//                         </Form.Group>

//                         <Form.Group xs={3} as={Col} controlId='time'>
//                             <Form.Label>Time</Form.Label>
//                             <Form.Control size="sm"
//                                 type='text'
//                                 placeholder='HH:MM'
//                             ></Form.Control>
//                         </Form.Group>

//                     </Form.Row>


//                     <Form.Group as={Row} controlId='department'>
//                         <Col>
//                             <center>
//                                 <Button type='submit' variant='primary'>Search </Button>
//                                 {' '}
//                                 <Link to='/brand' className='btn btn-danger'>  Cancel </Link>
//                             </center>
//                         </Col>
//                     </Form.Group>

//                 </Form>
//             )}
//             {/* </FormContainer> */}

//             <Table striped bordered hover responsive className='table-sm'>
//                 <thead>
//                     <tr>
//                         {/* <th>ID</th> */}
//                         <th>Process Type</th>
//                         <th>Step</th>
//                         <th>Status</th>
//                         <th>Date</th>
//                         <th>Time</th>
//                         <th>User</th>
//                         <th>Department</th>
//                         <th>No. Of Associates<br /> Processed</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((d) => (
//                         <tr key={d._id}>
//                             {/* <td>{d._id}</td> */}
//                             <td>{d.processType}</td>
//                             <td>{d.step}</td>
//                             <td>{d.status}</td>
//                             <td>{d.date}</td>
//                             <td>{d.time}</td>
//                             <td>{d.user}</td>
//                             <td>{d.department}</td>
//                             <td>{d.associates}</td>
//                             <td>
//                                 <LinkContainer to={`/`} >
//                                     <Button variant='light' className='btn-sm'>
//                                         <i className='fas fa-edit'></i>  Edit
//                                         </Button>
//                                 </LinkContainer>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </>
//     );
// }

// export default VoidConfirmation

