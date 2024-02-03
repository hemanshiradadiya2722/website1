import React from 'react';
import Header from './Header'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg9 from './assets/asset 8.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import myimg12 from './assets/asset 16.jpeg';
import Card from 'react-bootstrap/Card';
import FTop from './FTop';
import BCard from './BCard';



function BGcolor(){
  return (
    <>
      <div className='Blog_image text-center py-5'>
        <div className='about_cnt text-center'>
          <div className='abt_large'>
            Blogs
          </div>
          <div className='abt_sml pb-5'>
            Get the latest updates and Insights on Real Estate propertie
          </div>
        </div>
      </div>
        
       
      
       
    </>
  );
}
export default BGcolor;