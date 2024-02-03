import React from 'react';
import Header from './Header'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg9 from './assets/asset 8.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import BList from './BList';
import ListForm from './assets/ListForm';
import FTop from './FTop';
import './App.css';

// import { MDBSelect } from 'mdb-react-ui-kit';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBRadio}from 'mdb-react-ui-kit';



function FormSec(){
  return (
    <>
      <div>
      <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 text-center">Share your details and we will connect with your shortly.</h3>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
        </MDBCol>

      </MDBRow>


      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
        </MDBCol>

      </MDBRow>
      
      <MDBRow>

        {/* <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
        </MDBCol> */}

        <MDBCol md='12' className='mb-4'>
          <h6 className="fw-bold">Which best describes you? </h6>
          <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='
Home Buyer' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Home Seller' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Renter' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Homeowner' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='
Investor' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='
General Inquiry' inline />
        </MDBCol>

      </MDBRow>

      <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' label='Message' size='lg' id='form5' type='rel' className='mes_text' placeholder='type your message'/>
        </MDBCol>

      <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
      </div>
    </>
  );
}
export default FormSec;
