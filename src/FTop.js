import React from 'react';
import Header from './Header'
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg9 from './assets/asset 8.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import ACard from './ACard';
import UserCard from './UserCard';


function FTop() {
    return (
        <>
            <div className=' abt2 text-center'>
                <div className='about_cnt text-center'>
                <div className=' abt_large'>
                Your Dream Home Awaits – Get Started Now
                </div>
                <div className='abt_sml'>
                Are you ready to embark on your real estate journey? Whether you're buying, selling, investing, or simply exploring the market, we're here to make it happen for you. Discover how Real Estatoe can turn your real estate dreams into reality.
                </div>
                <div className='mt-4'>
                    <Button variant="primary" className='abt_btn me-2'>Browse Listing</Button>{' '}
                    <Button variant="primary" className='abt_btn2'>Add Property</Button>{' '}
                </div>
                </div>
                

                </div>
        </>
  );
}
export default FTop;