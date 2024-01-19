import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styles from './navbar.module.css';


export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> 
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /*
    <Container fluid className={styles.main_container}>
      <Navbar expand="lg" className="navbar">
        
          <Navbar.Brand href="#home" className={styles.logo_container}>
            <Image src={require('../../assets/images/logo192.png')} alt='logo' className={styles.logo} fluid/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className={styles.collapse_container}>
            <Nav className="ms-auto">

              <InputGroup className={styles.search_grp}> 
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  className={styles.search_bar}
                />

                  
              </InputGroup>

              <NavDropdown title="Create Oppurtunity" id="nav_create_oppurtunity" className={styles.create_opp_dropdown}>
                <NavDropdown.Item href="#create_event">Event</NavDropdown.Item>
                <NavDropdown.Item href="#create_ap">Affinity Partners</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Browse" id="nav_browse" className={styles.browse_dropdown}>
                <NavDropdown.Item href="#partners">Partners</NavDropdown.Item>
                <NavDropdown.Item href="#oppurtunites">Oppurtunites</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#login" className={styles.login}>Log In</Nav.Link>
              <Nav.Link href="#register" className={styles.join_btn}>
                <Button href="#" className={styles.join}>Join</Button>
              </Nav.Link>
              <Nav.Link href="#login" className={styles.inv_join}>Join</Nav.Link>
              <Nav.Link href="#pro" className={styles.pro_btn}>construckk pro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
    */
  );
}