import { Image, Row, Col } from 'react-bootstrap'

class Popup extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col><Image src="/download.jpg" alt="image" /></Col>
                    <Col>Hi, This is a Bird's Image</Col>
                </Row>
            </div>
        )
    }
}