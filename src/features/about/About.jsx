
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardImg
} from 'reactstrap';

import './about.css';

const About = ({ deadpool }) => {
  debugger
  const { id, image } = deadpool;
  return (
    <Container className='container-fluid'>
      <Row className='row-content'>
        <Col className='col-lg-6 col-12'>
          <Card>
            <CardTitle className='card-title text-center'><h2>Welcome to the Deadpool</h2></CardTitle>
            <CardBody className='card-body text-center p-3 bg-dark'>
              <CardText className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non perferendis repellat tenetur maxime minus provident totam delectus a, quam quos officia! Quod temporibus error eveniet suscipit nobis a earum consequatur unde rem soluta voluptatibus ab, pariatur quas officia dolore facilis reprehenderit nisi debitis. Rerum placeat velit inventore sint ipsa!</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className='col-lg-6 col-12'>
          <Card>
            <CardImg src={image} alt={id} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About