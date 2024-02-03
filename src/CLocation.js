import CL1 from './assets/l1.jpg';
import CL2 from './assets/l2.jpg';
import { Row, Col, Container } from 'react-bootstrap';





function CLocation() {
    return (
        <>
            <div className="spacer">
                <div className='loc_head text-center'>
                    <h2>Locations</h2>
                    <p className="pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <Container>
                    <Row>
                        <Col lg={6} md={12} className=''>
                            <img src={CL1} className='CLimg'></img>
                            <div className='text-center'>
                                <h2 className='pt-4'>California</h2>
                                <p className='py-2'>123 Sample St, Sydney NSW 2000 AU</p>
                                <a className='py-2'>Get Directions</a>
                            </div>
                        </Col>
                        <Col lg={6} md={12} className=''>
                            <img src={CL2} className='CLimg '></img>
                            <div className='text-center'>
                                <h2 className='pt-4'>New York</h2>
                                <p className='py-2'>123 Sample St, New York NY 10000 USA</p>
                                <a className='py-2'>Get Directions</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default CLocation;