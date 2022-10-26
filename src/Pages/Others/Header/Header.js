import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { signOutUser, user } = useContext(AuthContext);

    // Theme handler section
    const [theme, setTheme] = useState(false);
    const bgColor = theme ? 'bg-dark bg-opacity-50' : 'bg-dark bg-opacity-10';
    document.body.className = bgColor;
    const handleTheme = () => {
        setTheme(!theme);
    }

    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .catch((e) => { toast.error(e.message) })
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
                    <Link to='/' className='ms-2 fs-3 text-decoration-none text-warning'>Learn JavaScript</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='d-flex align-items-center pb-2 pb-sm-0 ms-sm-auto'>
                        <Link to='/' className='text-decoration-none me-md-3'>Home</Link>
                        <Link to='/courses' className='text-decoration-none me-md-3'>Courses</Link>
                        <Link to='/faq' className='text-decoration-none me-md-3'>FAQ</Link>
                        <Link to='/blogs' className='text-decoration-none me-md-3'>Blogs</Link>
                        {
                            user?.uid ?
                                <Button className='me-md-3  mb-2 mb-md-0' onClick={handleSignOut} variant="outline-danger">LogOut</Button>
                                :
                                <>
                                    <Link to='/login' className='text-decoration-none me-md-3'>LogIn</Link>
                                    <Link to='/register' className='text-decoration-none me-md-3 mb-2 mb-md-0'>Register</Link>
                                </>
                        }
                        {
                            theme ?
                                <Button className='text-decoration-none me-md-3 mb-2 mb-md-0' onClick={handleTheme} variant="outline-light">Light</Button>
                                :
                                <Button className='text-decoration-none me-md-3 mb-2 mb-md-0' onClick={handleTheme} variant="outline-light">Dark</Button>
                        }
                        {
                            user?.photoURL ?
                                <img style={{ width: '40px', height: '40px' }} className='rounded-circle' title={user.displayName} src={user.photoURL} alt='' />
                                :
                                <FontAwesomeIcon className='text-white fs-5' icon={faUser} />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;