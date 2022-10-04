import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Navigation = () => {
  const [auth, setAuth] = useContext(AuthContext);

  let history = useNavigate();

  function logout() {
    setAuth(null);
    history('/');
  }
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>

                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                  {auth ? (
                    <>
                      <NavLink to="/admin" className="nav-link">
                        Admin
                      </NavLink>{' '}
                      <Button onClick={logout}>log out</Button>
                    </>
                  ) : (
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation;
