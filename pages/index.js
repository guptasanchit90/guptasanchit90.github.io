import Head from 'next/head';
import { Container } from 'react-bootstrap';
import WavesComponent from '../components/Waves';
import Projects from '../components/projects';
import Skills from '../components/skills';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import SocialCard from '../components/social-card';
import ContactUs from '../components/contact-us';

export default function Home() {
  const [skillHeight, setSkillHeight] = useState(0);

  // useEffect(()=>{
  //   const updateWindowDimensions = () => {
  //     const newHeight = document.getElementById('skills').clientHeight;
  //     setSkillHeight(newHeight);
  //   };
  //   window.addEventListener("resize", updateWindowDimensions);
  //   return () => window.removeEventListener("resize", updateWindowDimensions) 
  // }, []);

  return (
    <Container className="p-0" fluid>
      <Head>
        <title>Sanchit Gupta</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css" />
      </Head>

      <NavBar />

      <Container className="p-0" fluid >

        <WavesComponent />

        {/* <SocialCard /> */}

        <div id="content-section">
          <Skills />

          <Projects />

          {/* <ContactUs /> */}
          <SocialCard />
        </div>

      </Container>

    </Container>
  )
}
