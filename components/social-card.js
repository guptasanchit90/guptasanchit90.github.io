import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import GitHubProfileBadge from './social-media/GitHubProfileBadge';
import LinkedinProfileBadge from './social-media/LinkedinProfileBadge';
import StackOverflowProfileBadge from './social-media/StackOverflowProfileBadge';

const SocialCard = ({ type }) => {

    return <Container id={"social"}>
        <Row className="justify-content-center">
            <Col lg={4} md={6} sm={8}>
                <StackOverflowProfileBadge />
            </Col>

            <Col lg={4} md={6} sm={8}>
                <GitHubProfileBadge />
            </Col>
            <Col lg={4} md={6} sm={8}>
                <LinkedinProfileBadge />
            </Col>
        </Row>
    </Container>

}

export default SocialCard;