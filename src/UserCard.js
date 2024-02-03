import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import myimg3 from './assets/asset 2.png';
import myimg4 from './assets/asset 3.png';
import myimg5 from './assets/asset 4.png';



function UserCard() {
    return (
        <div className=' ucard spacer'>
            <Container>
                <h2 className='ap-text'>Team and Agents</h2>
                <p className='pb-5 pa-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className='main_card d-flex justify-content-between'>
                    <Row>
                        <Col md={4} className='mb-sm-4 mb-md-0'>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 11.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title>John Smith</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Founder and Lead Agent</Card.Subtitle>
                                    <Card.Text>
                                    John has been in the real estate industry for over 15 years and has a deep understanding of the local market. His commitment to his clients and his passion make him the go-to agent for both buyers and sellers.
                                    </Card.Text>
                                    <Card.Link href="#">in</Card.Link>
                                    <Card.Link href="#">x</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 15.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title>Emily Davis</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Senior Sales Agent</Card.Subtitle>
                                    <Card.Text>
                                    Emily's extensive knowledge of the market and her strong negotiation skills make her a valuable asset to our team. She takes pride in helping clients find their dream homes and is dedicated to achieving the best results.
                                    </Card.Text>
                                    <Card.Link href="#">in</Card.Link>
                                    <Card.Link href="#">x</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 13.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title>Sarah Johnson</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Property Specialist</Card.Subtitle>
                                    <Card.Text>
                                    Sarah's attention to detail and her ability to match clients with the perfect property are unmatched. She's known for her personalized approach and her commitment to ensuring that every client's needs are met.
                                    </Card.Text>
                                    <Card.Link href="#">in</Card.Link>
                                    <Card.Link href="#">x</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/h1.jpg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title>Michael Brown</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Investment Expert</Card.Subtitle>
                                    <Card.Text>
                                    Michael specializes in real estate investments and has a keen eye for identifying opportunities. Whether you're a first-time investor or looking to expand your portfolio.
                                    </Card.Text>
                                    <Card.Link href="#">in</Card.Link>
                                    <Card.Link href="#">x</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 12.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title>Jane</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Communication Specialist</Card.Subtitle>
                                    <Card.Text>
                                    Jane ensures that our listings shine in the market. Her marketing strategies, coupled with her strong communication skills, help our clients' properties stand out, attracting both buyers and sellers.
                                    </Card.Text>
                                    <Card.Link href="#">in</Card.Link>
                                    <Card.Link href="#">x</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card  >
                                <Card.Img variant="top" src={require('./assets/asset 14.jpeg')} style={{ width: '20rem' }} className='m-auto pt-3' />
                                <Card.Body>
                                    <Card.Title>Zara</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Property Specialist</Card.Subtitle>
                                    <Card.Text>
                                    Zara's attention to detail and her ability to match clients with the perfect property are unmatched. She's known for her commitment to ensuring that every client's needs are met.
                                    </Card.Text>
                                    <Card.Link href="#">in</Card.Link>
                                    <Card.Link href="#">x</Card.Link>
                                </Card.Body>  
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    )
}
export default UserCard;