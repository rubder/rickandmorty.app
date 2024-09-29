import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Navigeitionbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/landingpague">RickAndMortyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Create">Crear Personaje</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

