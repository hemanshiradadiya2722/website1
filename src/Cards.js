import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import myimg3 from './assets/asset 2.png';
import myimg4 from './assets/asset 3.png';
import myimg5 from './assets/asset 4.png';



function Cards() {
    return(
        <div className='spacer c_b'>
        <Container>
          <h2 className='text-center pb-5 c-text'>Diverse Properties, Infinite Possibilities</h2>
          <div className='main_card d-flex justify-content-between'>
            <Row>
              <Col md={4} className='mb-sm-4 mb-md-0'>
                <Card  >
                  <Card.Img variant="top" src={myimg3} style={{ width: '5rem' }} className='m-auto pt-3' />
                  <Card.Body>
                    <Card.Title><h3 className='p-2 text-center'>Location</h3></Card.Title>
                    <Card.Text className='text-center'>
                      Our properties are strategically located in vibrant neighborhoods, ensuring easy access to local attractions, dining, and for a convenient and exciting lifestyle.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card  >
                  <Card.Img variant="top" src={myimg4} style={{ width: '5rem' }} className='m-auto pt-3' />
                  <Card.Body>
                    <Card.Title><h3 className='p-2 text-center'>Property Type</h3></Card.Title>
                    <Card.Text className='text-justify'>
                      Discover our diverse range of properties, from modern urban apartments to cozy countryside cottages, each designed to cater to your unique preferences and needs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card  >
                  <Card.Img variant="top" src={myimg5} style={{ width: '5rem' }} className='m-auto pt-3' />
                  <Card.Body>
                    <Card.Title><h3 className='p-2 text-center'>Amentities</h3></Card.Title>
                    <Card.Text className='text-justify'>
                      Elevate your living experience with our top-notch amenities, including fitness centers, communal spaces,  designed to make your stay comfortable and enjoyable.
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
export default Cards;