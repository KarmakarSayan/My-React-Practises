import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";
import '../styles/NavBar.css';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SK <span>Traders</span></Navbar.Brand>
          
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            {/* Search Bar */}
            <div className="searchbar">
              <input 
                type="text" 
                placeholder="Enter Details To Search"
              />
            </div>
          </Nav>

          {/* Account Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-account">
              <FaUserCircle size={24} style={{ marginRight: "5px" }} />
              Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#help">Help</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
