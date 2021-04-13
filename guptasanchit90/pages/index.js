import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WavesComponent from '../components/waves/waves';
import Projects from '../components/projects';
import Skills from '../components/skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanchit Gupta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" style={{ zIndex: 999, backgroundColor: "#2c3e50" }}>
      <Navbar.Brand href="#home">Sanchit Gupta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ paddingLeft: "10vw" }}>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#experience">EXPERIENCE</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#skills">SKILLS</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#projects">PROJECTS</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#contact-me">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <Container >

        <WavesComponent />

          <Skills />

          <Projects />

      </Container>

    </div>
  )
}
