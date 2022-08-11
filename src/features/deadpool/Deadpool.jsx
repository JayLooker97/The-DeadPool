import { Container, Row, Col } from 'reactstrap';
import './deadpool.css';

const Deadpool = () => {
  return (
    <Container className='container-fluid'>
      <Row className='row-content'>
        <Col className='col-3 deadpool-grid'>
          <h4 className='deadpool-title text-center'>PLAYER</h4>
        </Col>
        <Col className='col-3 deadpool-grid'>
        <h4 className='deadpool-title text-center'>BET</h4>
        </Col>
        <Col className='col-3 deadpool-grid'>
          <h4 className='deadpool-title text-center'>PICK</h4>
        </Col>
        <Col className='col-3'>
          <h4 className='deadpool-title text-center'>AGE</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Deadpool;