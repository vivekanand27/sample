import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import {Button, Row, Col, Modal} from 'react-bootstrap'

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const openPopup = () => {


 }

  return (
    <div className="App">
      {/* <Row className="py-4">
        <Col xs={4}></Col>
        <Col xs={4}> <Button  variant="success">Success</Button>
        
        </Col>
        <Col xs={4}></Col>
      </Row> */}
      <Button variant="primary" onClick={handleShow} className="modal-button">
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default App;
