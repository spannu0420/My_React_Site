import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='main_div'>
        <Navbar.Brand as={Link} to="/">
          <div>
            <img className='image' src="https://www.staragroindustry.com/public/uploads/settings/17629274017458.png" alt="Logo" />
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About_us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/Products">Product</Nav.Link>
            
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Seed_Drill_Pro">1. Seed Drills Shovel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Cultivator_Shovels_Pro">2. Tiller cultivator shovel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Inter_Shovels_Pro">3. Inter Shovels</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Tiller_Duck_Pro">4. Tiller Duck Foot Shovels & Misc</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Duck_Sweeps_Pro">5. Duck foot sweeps</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/M_B_Plough_Pro">6. M B Plough & Reversible Plough Blades</NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="/Rotary_Pro">7. Rotary Slasher Blades</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Rotavator_Pro">8. Rotavator Blades</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Plough">9. Point of plough (export oriented)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Sub_Soiler">10. Sub Soiler Blades</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/why_us">Why Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;