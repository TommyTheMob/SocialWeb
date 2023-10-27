import {FC} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from 'react-router-dom';

const AppNavbar: FC = () => {
    return (
        <>
            <Navbar expand='lg' className="mb-5 bg-primary bg-gradient">
                <Container>
                    <Navbar.Brand className='text-white' as={Link} to='/'>
                        <img
                            alt="logo"
                            className="d-inline-block align-top"
                        />{' '}
                        Social Web
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' as={Link} to='/'>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default AppNavbar;
