import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" style={{
            zIndex: 999, background: `var(--gradient-bg);` }}>
            {/* <Navbar.Brand href="#home">Sanchit Gupta</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#home">HOME</Nav.Link>
                    <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#skills">SKILLS</Nav.Link>
                    <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#projects">PROJECTS</Nav.Link>
                    <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#contact-me">CONTACT ME</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;