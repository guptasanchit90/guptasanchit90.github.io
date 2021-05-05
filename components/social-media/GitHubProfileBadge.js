import { faLaptopCode, faLightbulb, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GitHubProfileBadge = (props) => {

    const [profileData, setProfileData] = useState({
                name: "",
                url: "",
                bio: "Full stack developer",
                page: "",
                repos: 0,
                gists: 0,
                followers: 0
    });

    useEffect(async () => {
        Promise.all([
            fetch('https://api.github.com/users/guptasanchit90').then(resp => resp.json()),
            fetch('https://api.github.com/users/guptasanchit90/repos').then(resp => resp.json()),
            fetch('https://api.github.com/users/guptasanchit90/gists').then(resp => resp.json()),
            fetch('https://api.github.com/users/guptasanchit90/followers').then(resp => resp.json())
        ]).then(responses => {
            setProfileData({
                ...profileData,
                name: responses[0].name,
                url: responses[0].html_url,
                bio: responses[0].bio,
                page: responses[0].url,
                repos: responses[1].length,
                gists: responses[2].length,
                followers: responses[3].length
            })
        })

    }, []);

    return <Container>
        <Card style={{ textAlign: "center", border:"unset" }}>
            <Card.Body >
            <FontAwesomeIcon className="mb-2" size="3x" icon={faGithub} />
                <Card.Title>{profileData.bio}</Card.Title>
                <Card.Text className="mt-4" >
                    <Row>
                        <Col>
                            <FontAwesomeIcon className="mb-2" size="2x" color={"var(--color-secondary)"} icon={faLightbulb} /> <br />{profileData.repos}<br />Repos
                        </Col>
                        <Col>
                            <FontAwesomeIcon className="mb-2" size="2x" color={"var(--color-secondary)"} icon={faPoll} /> <br />{profileData.followers}<br />Followers
                        </Col>
                        <Col>
                            <FontAwesomeIcon className="mb-2" size="2x" color={"var(--color-secondary)"} icon={faLaptopCode} /> <br />{profileData.gists}<br />Gists
                        </Col>
                    </Row>

                </Card.Text>

            </Card.Body>

            <Card.Footer style={{background: "var(--gradient-bg)", color:"white", fontSize:"smaller"}}>
                <Card.Link href={profileData.url} target="_blank">View GitHub Profile</Card.Link>
            </Card.Footer>
        </Card>

    </Container>
}

export default GitHubProfileBadge;