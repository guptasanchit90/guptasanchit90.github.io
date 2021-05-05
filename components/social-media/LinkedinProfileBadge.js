import { faRibbon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const LinkedinProfileBadge = (props) => {

    const [profileData, setProfileData] = useState({
                    name: "Sanchit Gupta",
                    url: "https://www.linkedin.com/in/guptasanchit90/",
                    rep: 0,
                    badges: {
                        bronze: 0,
                        silver: 0,
                        gold: 0
                    }
    });

    

    return <Container>
        <Card style={{ textAlign: "center", border:"unset" }}>
            <Card.Body >
                <FontAwesomeIcon className="mb-2" size="3x"  icon={faLinkedinIn} />
                <Card.Title>Reputation : {profileData.rep}</Card.Title>
                <Card.Text className="mt-4" >
                    <Row>
                            <Col>
                                <FontAwesomeIcon className="mb-2" size="2x" color={"#CD7F32"} icon={faRibbon} /> <br />{profileData.badges?.bronze}<br />Bronze
                            </Col>
                            <Col>
                                <FontAwesomeIcon className="mb-2" size="2x" color={"#aaa9ad"} icon={faRibbon} /> <br />{profileData.badges?.silver}<br />Silver
                            </Col>
                        {!!profileData.badges?.gold &&
                            <Col>
                                <FontAwesomeIcon className="mb-2" size="2x" color={"gold"} icon={faRibbon} /> <br />{profileData.badges?.gold}<br />Gold
                            </Col>
                        }
                    </Row>

                </Card.Text>

            </Card.Body>

            <Card.Footer style={{background: "var(--gradient-bg)", color:"white", fontSize:"smaller"}}>
                <Card.Link href={profileData.url} target="_blank">View LinkedIn Profile</Card.Link>
            </Card.Footer>
        </Card>

    </Container>
}

export default LinkedinProfileBadge;