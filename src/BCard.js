import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import myimg3 from './assets/asset 2.png';
import myimg4 from './assets/asset 3.png';
import myimg5 from './assets/asset 4.png';



function BCard() {
    return (
        <div className=' ucard spacer'>
            <Container>
                <div className='main_card d-flex justify-content-between'>
                    <Row>
                        <Col md={4} className='mb-sm-4 mb-md-3'>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 9.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Subtitle className="my-2 text-muted">5 min read</Card.Subtitle>
                                    <Card.Title>The Future of Real Estate: Trends to Watch in 2023</Card.Title> 
                                    <Card.Text>
                                    The real estate landscape is constantly evolving. Stay ahead of the curve with Real Estatoe's blog on the latest industry trends.
                                    </Card.Text>
                                    <Card.Link href="#">Read more</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4} className='mb-sm-4 mb-md-0'>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/img1.jpg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Subtitle className="my-2 text-muted">5 min read</Card.Subtitle>
                                    <Card.Title>Navigating the Luxury Real Estate Market</Card.Title> 
                                    <Card.Text>
                                    Planning to sell your home? Real Estatoe offers valuable insights into home renovations that can significantly increase your property's value.
                                    </Card.Text>
                                    <Card.Link href="#">Read more</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4} className='mb-sm-4 mb-md-0'>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 16.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Subtitle className="my-2 text-muted">7 min read</Card.Subtitle>
                                    <Card.Title>Boost your home Value with These Renovation Ideas</Card.Title> 
                                    <Card.Text>
                                    Planning to sell your home? Real Estatoe offers valuable insights into home renovations that can significantly increase your property's value.
                                    </Card.Text>
                                    <Card.Link href="#">Read more</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4} className='mb-sm-4 mb-md-0'>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 17.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Subtitle className="my-2 text-muted">6 min read</Card.Subtitle>
                                    <Card.Title>Investing in Real Estate: A Beginner's Guide</Card.Title> 
                                    <Card.Text>
                                    Our experts at Real Estatoe share their top 10 tips to help first-time homebuyers navigate the process with confidence. From budgeting to negotiating, we've got you covered.
                                    </Card.Text>
                                    <Card.Link href="#">Read more</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4} className='mb-sm-4 mb-md-0'>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 18.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Subtitle className="my-2 text-muted">5 min read</Card.Subtitle>
                                    <Card.Title>Top 10 Tips for First-Time Homebuyers</Card.Title> 
                                    <Card.Text>
                                    Our experts at Real Estatoe share their top 10 tips to help first-time homebuyers navigate the process with confidence. From budgeting to negotiating, we've got you covered.
                                    </Card.Text>
                                    <Card.Link href="#">Read more</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    )
}
export default BCard;