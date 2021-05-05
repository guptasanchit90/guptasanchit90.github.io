import React from 'react';
import {  Col, Container, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
    return (
        <Container id={"contact-me"} style={{ textAlign: "center" }}>
            <Row>
                <Col md={12}>
                    <h3 className="mt-2">GET IN TOUCH</h3>
                </Col>

                {/* <Col  md={12} lg={4} bg={"dark"} text={"light"} style={{ textAlign: "left" }} className="my-4">
                        <Row className="m-0 p-0">

                            <Col className="mb-2 mt-2 pr-0" md={12}>
                                <Row>
                                    <Col xs="2">
                                        <FontAwesomeIcon style={{ width: "100%" }} size="2x" icon={faMobileAlt} />
                                    </Col>
                                    <Col className="divider">
                                        <h6 className="m-0">Let's Talk</h6>
                                        <span style={{ fontSize: "small" }}>Phone : 9650694400</span>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="mb-2 mt-2 pr-0" md={12}>
                                <Row>
                                    <Col xs="2">
                                        <FontAwesomeIcon style={{ width: "100%" }}  size="2x" icon={faEnvelope} />
                                    </Col>
                                    <Col className="divider">
                                        <h6 className="m-0">E-Mail Us</h6>
                                        <span style={{ fontSize: "small" }}>Email : g***.s********@gmail.com</span>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="mb-2 mt-2 pr-0" md={12}>
                                <Row>
                                    <Col xs="2">
                                        <FontAwesomeIcon style={{ width: "100%" }} size="2x" icon={faMapPin} />
                                    </Col>
                                    <Col className="divider">
                                        <h6 className="m-0">Our Location</h6>
                                        <span style={{ fontSize: "small" }}>Jaipur</span>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                </Col> */}
                <Col lg={2} md={12}></Col>

                <Col lg={8} md={12} className="mt-4">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control className="fontAwesome" type="text" placeholder="&#xf007;  Your Name" />
                                </Form.Group>
                                {/* <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Control className="fontAwesome" type="number" placeholder="&#xf095;  Cell Phone..." />
                                </Form.Group> */}
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control className="fontAwesome" type="email" placeholder="&#xf0e0;  Email Address" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridSubject">
                                    <Form.Control className="fontAwesome" type="text" placeholder="&#xf303;  Subject" />
                                </Form.Group>
                            </Form.Row>


                            <Form.Group controlId="formGridMessage">
                                <Form.Control className="fontAwesome" rows={5} as="textarea" placeholder="&#xf075;  Your Message" />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </Form>
                </Col>
                <Col lg={2} md={12}></Col>
            </Row>

        </Container>
    )
}

export default ContactUs;