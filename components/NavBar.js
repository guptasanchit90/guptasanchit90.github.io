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
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#header">HOME</Nav.Link>
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#skills">SKILLS</Nav.Link>
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#projects">PROJECTS</Nav.Link>
                    <Nav.Link className="px-4" style={{ color: "#ecf0f1" }} href="#social">FIND ME</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;