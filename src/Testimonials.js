import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './App.css';

function Testimonials() {
    return(
        <div className='spacer'>
        <Container>
          <div className='c_h'>
            <h2 className='c_head'>Customer testimonials</h2>
            <p className='py-3'>Lets take a look at what customer has to say about us</p>
          </div>
      </Container>
          <Row>
            <Col xl={4} lg={6} md={12}>
            <Card >
              <Card.Body>
                <Card.Title>John</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">lives in New york</Card.Subtitle>
                <Card.Text>
                  We couldn't have asked for a better experience with Real Estatoe. Their expertise and dedication made our home-buying process smooth and stress-free. They found us our dream home and negotiated a great deal. Highly recommended!
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col xl={4} lg={6} md={12}><Card >
              <Card.Body>
                <Card.Title>Sarah L</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">lives in San Diego</Card.Subtitle>
                <Card.Text>
                  I recently sold my property with Real Estatoe, and I was impressed by their professionalism and market knowledge. They went above and beyond to showcase my home and secure a quick sale at a great price. Thank you!
                </Card.Text>
              </Card.Body>
            </Card></Col>
            <Col xl={4} lg={6} md={12}>
            <Card>
              <Card.Body>
                <Card.Title>David</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">lives in New York</Card.Subtitle>
                <Card.Text>
                  "Working with Real Estatoe was a pleasure from start to finish. Their agents were attentive to our needs, patient with our questions, and provided valuable insights into the local market. We're now happily settled in our new home, all thanks to them."
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col xl={4} lg={6} md={12}>
            <Card>
              <Card.Body>
                <Card.Title>Maria H</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">lives in San Fransisco</Card.Subtitle>
                <Card.Text>
                  "I can't thank Real Estatoe enough for helping me find the perfect rental property. They listened to my preferences and found me a beautiful apartment within my budget. Their attention to detail and commitment to customer satisfaction truly stand out."
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col xl={4} lg={6} md={12}>
            <Card>
              <Card.Body>
                <Card.Title>Whitney K</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">lives in Michigan</Card.Subtitle>
                <Card.Text>
                  "Selling my property through Real Estatoe was a breeze. Their team's marketing strategies and negotiation skills were impressive. I was kept informed at every step, and my property sold quickly. I highly recommend their services."
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col xl={4} lg={6} md={12}>
            <Card >
              <Card.Body>
                <Card.Title>Susan</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">lives in Dallas</Card.Subtitle>
                <Card.Text>
                  "We had a fantastic experience with Real Estatoe when selling our family home. Their knowledge of the local market was invaluable, and their dedication to getting us the best deal was evident throughout the process. We couldn't be happier with the outcome."
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
       
      </div> 
    );
}
export default Testimonials;