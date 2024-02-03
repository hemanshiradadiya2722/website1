import React from 'react';
import Header from './Header'
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg9 from './assets/asset 8.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import ACard from './ACard';
import UserCard from './UserCard';
import FTop from './FTop';


function About() {
  return (
    <>
      <div className='About_image text-center'>
        <div className='about_cnt text-center'>
          <div className=' abt_large'>
            Welcome to Real Estatoe - Your Trusted Real Estate Partner
          </div>
          <div className='abt_sml'>
            With a commitment to excellence and a passion for real estate, we are here to guide you every step of the way.
          </div>
          <div className='mt-4'>
            <Button variant="primary" className='abt_btn me-2'>Browse Listing</Button>{' '}
            <Button variant="primary" className='abt_btn2'>Add Property</Button>{' '}
          </div>
        </div>
        <div >
          <img src={require('./assets/home.jpg')} className='abt_img'></img>
        </div>

      </div>
      <div className=' abt_sec'>
        <Row className='mb-5'>
          <Col md={6} xs={12} className=' my-auto'>
            <div>
              <h2 className='head_t'>Redefining Real Estate Excellence</h2>
              <p className='py-3 par_t'>At Real Estatoe, our vision is simple yet powerful: we aspire to redefine real estate excellence. We envision a future where every real estate transaction is seamless, stress-free, and tailored to our clients' unique needs. Our goal is to set new standards in the industry by continuously innovating, embracing technology, and delivering unparalleled value.</p>
            </div></Col>
          <Col md={6} xs={12} >
            <div className='l_img'>
              <img src={require('./assets/asset 7.jpeg')}></img>
            </div>
          </Col>
        </Row>
      </div>
      <ACard></ACard>
      <UserCard></UserCard>
      <FTop></FTop>

    </>

  );
}
export default About;
