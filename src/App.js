import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Row, Col} from 'react-bootstrap'

function App() {

 const openPopup = () => {


 }

  return (
    <div className="App">
      <Row className="py-10">
        <Col xs={4}></Col>
        <Col xs={4}> <Button  variant="success">Success</Button>
        
        </Col>
        <Col xs={4}></Col>
      </Row>
      
    </div>
  );
}

export default App;
