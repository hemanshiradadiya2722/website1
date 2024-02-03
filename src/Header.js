import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import myimg2 from './assets/asset 0.png';
import './App.css';


function Header() {
    return (
        <div className='main_menu'>
            <Navbar expand="lg" className='menu'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={myimg2} className='logo'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className='justify-content-center'>
                        <Nav >
                            <Nav.Link href="/" className='pe-4 menu_t'>Home</Nav.Link>
                            <Nav.Link href="/About" className='pe-4 menu_t'>About</Nav.Link>
                            <Nav.Link href="/Faq" className='pe-4 menu_t'>FAQ</Nav.Link>
                            <Nav.Link href="/Blog" className='pe-4 menu_t'>Blog</Nav.Link>
                            <Nav.Link href="/Contact" className='pe-4 menu_t'>Contact</Nav.Link>
                            <Nav.Link href="/AListing" className='pe-4 menu_t'>Add Listing</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end align-items-end'>
                        <Nav.Link href="#link">
                            <button className='h_button d-none d-xl-block'>Browse Listing</button>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}
export default Header;