import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const WavesComponent = () => {
    const subTitles = [
        'One man’s crappy software is another man’s full time job.',
        'If at first you don’t succeed; call it version 1.0',
        'All computers wait at the same speed.',
        'A computer program does what you tell it to do, not what you want it to do.',
        `Code is like humor. When you have to explain it, it's bad.`,
        `Code never lies, comments sometimes do.`,
    ]
    
    const [role, setRole] = useState(subTitles[0]);

    useEffect(()=>{
        
        setTimeout(() => {
            setRole((subTitles.indexOf(role) < subTitles.length - 1)
            ? subTitles[subTitles.indexOf(role) + 1] : subTitles[0])
        }, 4000);

    }, [role]);

    return (
        <div id={"header"}>

            <div className={"title"}>
                <Row>
                    <Col md={8}>
                        <h2>I am,</h2>
                        <h1>Sanchit Gupta</h1>
                    </Col>
                    <Col className="quotes">
                        <span>{role}</span>
                    </Col>
                </Row>
                
            </div>

            <div>
                <svg className={"waves"} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={"parallax"}>
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>

        </div>
    )
}

export default WavesComponent;