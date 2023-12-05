import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, LogOut, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut().then(() => console.log('successfully log out '))
    }

    const handleConsole = () => {
        console.log(loading)
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><Link to='/'> Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link onClick={handleConsole}>Loading</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {
                        user?.uid ?
                            <Nav>
                                <Nav.Link >{user?.displayName}</Nav.Link>

                                <Link className='ms-2 mt-2 me-4' onClick={handleLogOut}>
                                    LogOut
                                </Link>

                                <Link to='/profile'>
                                    {
                                        user?.photoURL ?
                                            <Image className=' mt-2' src={user.photoURL}
                                                roundedCircle
                                                style={{ height: '25px' }}
                                            ></Image>
                                            :
                                            <FaUser className=' mt-3 pb-2 fs-4'></FaUser>
                                    }
                                </Link>

                            </Nav>
                            :
                            <>
                                <Link className='me-2' to='/login'  >
                                    LogIn
                                </Link>
                                <Link className='me-2' to='/register'  >
                                    Register
                                </Link>
                            </>



                    }

                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;