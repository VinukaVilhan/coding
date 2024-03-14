import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './bottombar.css'

export default function BottomBar()
{
  return (
    <Container fluid>
      <Row className='row'>
        <Col>1 of 3</Col>
        <Col>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );

}