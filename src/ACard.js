import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import myimg3 from './assets/asset 2.png';
import myimg4 from './assets/asset 3.png';
import myimg5 from './assets/asset 4.png';



function ACard() {
    return (
        <div className=' Acard'>
            <Container>
                <h2 className='text-center pb-5 c-text'>How we Help</h2>
                <div className='main_card d-flex justify-content-between'>
                    <Row>
                        <Col md={4} className='mb-sm-4 mb-md-0'>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/i1.png')} style={{ width: '3rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title><h3 className='p-2 text-center'>Understanding Your Goals</h3></Card.Title>
                                    <Card.Text className='text-center'>
                                        The first step is to sit down with one of our experienced agents for a personalized consultation. Whether you're looking for a family home, an investment property, or your dream retirement retreat, we tailor our approach to your unique needs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/i2.png')} style={{ width: '3rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title><h3 className='p-2 text-center'>Finding Your Ideal Property</h3></Card.Title>
                                    <Card.Text className='text-center'>
                                        Once we have a clear picture of your requirements, we begin the search for your ideal property. Our extensive network and access to the latest listings allow us to present you with a curated selection of properties that match your criteria.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/i3.png')} style={{ width: '3rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title><h3 className='p-2 text-center'>Securing the Best Deal</h3></Card.Title>
                                    <Card.Text className='text-center'>
                                    When you've found the property you love, our skilled negotiators step in to secure the best deal on your behalf. We handle all negotiations, ensuring that you get the most favorable terms and pricing.
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
export default ACard;