import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import Button from 'react-bootstrap/Button';

const Header = () => {

    const [theme, setTheme] = useState(false);

    const bgColor = theme ? 'bg-dark bg-opacity-10' : 'bg-dark bg-opacity-75';

    const handleTheme = () => {
        setTheme(!theme);
        document.body.className = bgColor;
    }

    return (
        <Navbar className='p-0' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='d-flex align-items-center'>
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    <Link className='ms-2 fs-3 text-decoration-none text-warning'>Learn JavaScript</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex flex-row-reverse">
                    <Nav className='d-flex align-items-center'>
                        <Link className='text-decoration-none me-3'>Courses</Link>
                        <Link className='text-decoration-none me-3'>FAQ</Link>
                        <Link className='text-decoration-none me-3'>Blog</Link>
                        <Link className='text-decoration-none me-3'>Login</Link>
                        <Link className='text-decoration-none me-3'>Register</Link>
                        {
                            theme ?
                                <Button onClick={handleTheme} variant="outline-light">Light</Button>
                                :
                                <Button onClick={handleTheme} variant="outline-light">Dark</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;