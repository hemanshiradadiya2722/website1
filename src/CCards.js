import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import k1 from './assets/k1.png';
import k2 from './assets/k2.png';
import k3 from './assets/k3.png';



function CCards() {
    return(
        <div className='spacer c_b'>
        <Container>
          <div className='main_card d-flex justify-content-between'>
            <Row>
              <Col md={4} className='mb-sm-5 mb-md-3'>
                <Card  >
                  <Card.Img variant="top" src={k1} style={{ width: '3rem' }} />
                  <Card.Body>
                    <Card.Title><h3 className='py-3'>Email</h3></Card.Title>
                    <Card.Text>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
                        </p>
                    <a>hello@realestatoe</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='mb-sm-5 mb-md-3'>
                <Card  >
                  <Card.Img variant="top" src={k2} style={{ width: '3rem' }} />
                  <Card.Body>
                    <Card.Title><h3 className='py-3'>Phone</h3></Card.Title>
                    <Card.Text className='text-justify'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
                    </p>
                    <a>+1 (555) 000-0000</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='mb-sm-5 mb-md-3'>
                <Card  >
                  <Card.Img variant="top" src={k3} style={{ width: '3rem' }} />
                  <Card.Body>
                    <Card.Title><h3 className='py-3'>Live Chat</h3></Card.Title>
                    <Card.Text className='text-justify'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
                    </p>
                    <a>123 Sample St, Sydney NSW 2000 AU</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div> 

    )
}
export default CCards;