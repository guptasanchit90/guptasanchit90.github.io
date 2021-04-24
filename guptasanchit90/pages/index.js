import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WavesComponent from '../components/waves/Waves';
import Projects from '../components/projects';
import Skills from '../components/skills';

export default function Home() {
  return (
    <Container className="p-0" fluid>
      <Head>
        <title>Sanchit Gupta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" style={{ zIndex: 999, background: `linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  )` }}>
      <Navbar.Brand href="#home">Sanchit Gupta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ paddingLeft: "10vw" }}>
          <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#home">HOME</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#experience">EXPERIENCE</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#skills">SKILLS</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#projects">PROJECTS</Nav.Link>
            <Nav.Link style={{ paddingLeft: "5vw", color: "#ecf0f1" }} href="#contact-me">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <Container className="p-0" fluid >

<div id="home">
<WavesComponent />
</div>

          <Skills />

          <Projects />

      </Container>

    </Container>
  )
}
