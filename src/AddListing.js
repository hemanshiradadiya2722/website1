import React from 'react';
import Header from './Header'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg9 from './assets/asset 8.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import BList from './BList';
import ListForm from './assets/ListForm';
import FTop from './FTop';



function AddListing(){
  return (
    <>
      <BList></BList>
      <ListForm></ListForm>
      <FTop></FTop>
    </>
  );
}
export default AddListing;
