import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHome, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {
  
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" style={{
            zIndex: 999, background: `var(--gradient-bg)`
        }}>
            {/* <Navbar.Brand href="#home">Sanchit Gupta</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#header">
                        {/* <Nav.Item>
                            <FontAwesomeIcon icon={faHome} />
                        </Nav.Item> */}
                        <Nav.Item>Home</Nav.Item>
                    </Nav.Link>
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#skills">
                        {/* <Nav.Item>
                            <FontAwesomeIcon icon={faCode} />
                        </Nav.Item> */}
                        <Nav.Item>
                            Skills
                        </Nav.Item>
                    </Nav.Link>
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#projects">

                        {/* <Nav.Item> <FontAwesomeIcon icon={faMicrochip} /></Nav.Item> */}
                        <Nav.Item>Projects</Nav.Item>
                    </Nav.Link>
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#social">

                        {/* <Nav.Item><FontAwesomeIcon icon={faWhatsapp} /></Nav.Item> */}
                        <Nav.Item>Connect</Nav.Item>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;