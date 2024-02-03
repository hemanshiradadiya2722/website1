import myimg9 from './assets/asset 8.jpeg';
import myimg10 from './assets/asset 9.jpeg';
import myimg11 from './assets/asset 10.jpeg';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';



function Price(){
    return(
        <div className='py-5 card_div'>
        <Container>
          
          <h2 className='p_head'>Recent Listing</h2>

          <Row>
            <Col md={4} xs={12}>
            <Card  className='my-5'>
              <Card.Img variant="top" src={myimg9} />
              <Card.Body>
                <Card.Title>Cozy Cottage in Seattle City</Card.Title>
                <Card.Text>
                  This charming cottage features two bedrooms, a spacious living room, and a beautifully landscaped backyard.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>$500,000</ListGroup.Item>
                <ListGroup.Item>
                  <ul className='d-flex card_box'>
                    <li>2 rooms &nbsp;</li>
                    <li >1 bath &nbsp;</li>
                    <li >1200sqft</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            </Col>
            <Col md={4} xs={12}>
            <Card className='my-5'>
              <Card.Img variant="top" src={myimg10} />
              <Card.Body>
                <Card.Title>Luxury Condo in Miami Beach</Card.Title>
                <Card.Text>
                  This charming cottage features two bedrooms, a spacious living room, and a beautifully landscaped backyard.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>$1,800,000</ListGroup.Item>
                <ListGroup.Item>
                  <ul className='d-flex card_box'>
                    <li >3 rooms &nbsp;</li>
                    <li>3 baths &nbsp;</li>
                    <li>2500sqft</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            </Col>
            <Col md={4} xs={12}>
            <Card className='my-5'>
              <Card.Img variant="top" src={myimg11} />
              <Card.Body>
                <Card.Title>Downtown Loft in New York City</Card.Title>
                <Card.Text>
                  This charming cottage features two bedrooms, a spacious living room, and a beautifully landscaped backyard.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>$1,200,000</ListGroup.Item>
                <ListGroup.Item>
                  <ul className='d-flex card_box' >
                    <li >1 rooms &nbsp;</li>
                    <li>1 bath &nbsp;</li>
                    <li>1000sqft</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            </Col>
          </Row>

         
        </Container>
      </div> 
    );
}
export default Price;