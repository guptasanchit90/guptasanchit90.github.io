import { faRibbon } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const StackOverflowProfileBadge = (props) => {

    const [profileData, setProfileData] = useState({
                    name: "",
                    url: "",
                    rep: 0,
                    badges: {
                        bronze: 0,
                        silver: 0,
                        gold: 0
                    }
    });

    useEffect(async () => {
        fetch("https://api.stackexchange.com/2.2/users/4149453?order=desc&sort=reputation&site=stackoverflow")
            .then(res => res.json())
            .then(res => res.items[0])
            .then(res => {
                setProfileData({
                    ...profileData,
                    name: res.display_name,
                    url: res.link,
                    rep: res.reputation,
                    badges: res.badge_counts
                })
            })

    }, []);

    return <Container>
        <Card style={{ textAlign: "center", border:"unset" }}>
            <Card.Body >
                <FontAwesomeIcon className="mb-2" size="3x"  icon={faStackOverflow} />
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
                <Card.Link href={profileData.url} target="_blank">View StackOverflow Profile</Card.Link>
            </Card.Footer>
        </Card>

    </Container>
}

export default StackOverflowProfileBadge;