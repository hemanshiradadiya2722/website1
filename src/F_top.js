import { Row,Col } from 'react-bootstrap';
import './App.css';
import Container from 'react-bootstrap/Container';

function F_top() {
    return (
        //     <div className='fo_text'>
        //     <h2>
        //       <Container>
        //         Your Dream Home Awaits –<br></br> Get Started Now
        //       </Container>
        //     </h2>
        //     <p>
        //       <Container>
        //         Are you ready to embark on your real estate journey? Whether you're buying, selling, investing, or simply exploring the market, we're here to make it happen for you. Discover how Real Estatoe can turn your real estate dreams into reality.
        //       </Container>
        //     </p>
        //   </div>
        <Row>
            <Col>
                <div className='fo_text'>
                    <h2>
                        <Container>
                            Your Dream Home Awaits –<br></br> Get Started Now
                        </Container>
                    </h2>
                    <p>
                        <Container>
                            Are you ready to embark on your real estate journey? Whether you're buying, selling, investing, or simply exploring the market, we're here to make it happen for you. Discover how Real Estatoe can turn your real estate dreams into reality.
                        </Container>
                    </p>
                </div>
            </Col>
        </Row>
    );
}
export default F_top;