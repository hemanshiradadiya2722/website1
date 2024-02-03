import React from 'react';
import Header from './Header'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg9 from './assets/asset 8.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import BList from './BList';
import ListForm from './assets/ListForm';
import FTop from './FTop';
import FormSec from './FormSec';



function AListing(){
  return (
    <>
      <BList></BList>
      {/* <ListForm></ListForm> */}
      <FormSec></FormSec>
      <FTop></FTop>
    </>
  );
}
export default AListing;
