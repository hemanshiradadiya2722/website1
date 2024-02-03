// import React from 'react';
// import './App.css';
// import Container from 'react-bootstrap/Container';
// import myimg from './assets/asset 1.png';
// import myimg2 from './assets/asset 0.png';
// import { Navbar, Nav } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Header from './Header';
// import Faq from './Faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import { About } from './About';

import React from 'react';
import './App.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import myimg from './assets/asset 1.png';
import myimg2 from './assets/asset 0.png';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import myimg3 from './assets/asset 2.png';
import myimg4 from './assets/asset 3.png';
import myimg5 from './assets/asset 4.png';
import myimg6 from './assets/asset 5.jpeg';
import myimg7 from './assets/asset 6.jpeg';
import myimg8 from './assets/asset 7.jpeg';
import myimg9 from './assets/asset 8.jpeg';
import myimg10 from './assets/asset 9.jpeg';
import myimg11 from './assets/asset 10.jpeg';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Home from './Home';
import Footer from './Footer';
import Faq from './Faq';
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import AddListing from './AddListing';
import AListing from './AListing';
// import { Blogs } from './Blogs';
// import Layout from './Layout';
// import Cards from './Cards';
// import Price from './Price';
// import Testimonials from './Testimonials';
// import F_top from './F_top';
// import Footer from './Footer';
// import Head from './Head';







export default function App() {
  return (
    // -----------------------------------------------header---------------------------------------------------
    <div className='main_menu'>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/Faq" element={<Faq></Faq>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        {/* <Route path="/AddListing" element={<AddListing></AddListing>}></Route> */}
        <Route path="/AListing" element={<AListing></AListing>}></Route>
      </Routes>
    </BrowserRouter>
      <Footer></Footer> 

        </div>  
  );
}
