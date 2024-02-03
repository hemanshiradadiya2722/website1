import {  Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg6 from './assets/asset 5.jpeg';
import myimg7 from './assets/asset 6.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import './App.css';


function Layout() {
    return(
        <div>
        <div className='spacer'>
          <div className='text-center l_head py-3'>
            <h1>How it works</h1>
            <p className='p-4'>Concise overview of the process involved in buying or selling a property</p>
          </div>
          <Container>

            <Row className='mb-5'>
              <Col md={6} xs={12} className=' my-auto'>
                <div>
                  <div className='num_t py-3'>1.</div>
                  <h2 className='head_t'>Inquire and Inspire</h2>
                  <p className='py-3 par_t'>Take the first step in securing your ideal rental or property by reaching out to us. Your dream property awaits.</p>
                </div></Col>
              <Col md={6} xs={12} >
                <div className='l_img'>
                  <img src={myimg6}></img>
                </div>
              </Col>
            </Row><Row className='mb-5'>
              <Col md={6} xs={12} className=' my-auto'>
                <div>
                  <div className='num_t py-3'>2.</div>
                  <h2 className='head_t'>Guided Tours, Your Way</h2>
                  <p className='py-3 par_t'>Let us be your personal tour guide, arranging property viewings tailored to your schedule and preferences.</p>
                </div></Col>
              <Col md={6} xs={12} >
                <div className='l_img'>
                  <img src={myimg7}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12} className=' my-auto'>
              <div>
                <div className='num_t py-3'>3.</div>
                <h2 className='head_t'>Sealing the Deal, Your Style</h2>
                <p className='py-3 par_t'>Take the first step in securing your ideal rental or property by reaching out to us. Your dream property awaits.</p>
              </div></Col>
              <Col md={6} xs={12} >
                <div className='l_img'>
                  <img src={myimg8}></img>
                </div>
              </Col>
            </Row>
          </Container>


        </div>
      </div> 
    );
}
export default Layout;