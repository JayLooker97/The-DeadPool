import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { selectImageById } from './aboutSlice';


import './about.css';

const About = () => {
  const { image } = useParams();
  const deadpool = useSelector(selectImageById('deadpool'));
  console.log(deadpool);
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
            {/* <CardImg src={image} alt={deadpool} /> */}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About