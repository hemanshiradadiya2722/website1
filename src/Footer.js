import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './App.css';
import myimg2 from './assets/asset 0.png';


function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section> */}

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={require('./assets/flogo.png')} className='log_img'></img>
              </h6> 
              <p>
              Join our newsletter to stay up to date on features and releases.

              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Browse Listing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  List Your Place
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blogs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Admin</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Style Guide
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Licence
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Instruction
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Password
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  404
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Follow Us</h6>
              <p>
                <a href='' className='me-4 text-reset'>
                  Facebook
                </a>               
              </p>
              <p>
                <a href='' className='me-4 text-reset'>
                  Instagram
                </a>               
              </p>
              <p>
                <a href='' className='me-4 text-reset'>
                  Linked in
                </a>               
              </p>
              <p>
                <a href='' className='me-4 text-reset'>
                  Twitter
                </a>               
              </p>
              <p>
                <a href='' className='me-4 text-reset'>
                  Youtube
                </a>               
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;