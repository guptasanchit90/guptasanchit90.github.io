import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const skills = [
    {
        category: "Fornt-End Basics",
        technologyAndTools: ['Javascript', 'HTML', 'CSS']
    },
    {
        category: "Fornt-End Frameworks",
        technologyAndTools: ['React', 'Angular']
    },
    {
        category: "Fornt-End Styles",
        technologyAndTools: ['Bootstrap', 'Materiall UI']
    },
    {
        category: "Back-End",
        technologyAndTools: ['Node JS', 'Java', 'PHP']
    }
]

export default function Skills() {
    return (
        <Container id="skills">
            <Row>
                {skills.map((skill, i) => {
                    return (
                        <Col>
                            <Card style={{ width: '18rem', margin:"12px" }}>
                                <Card.Header>{skill.category}</Card.Header>
                                <ListGroup variant="flush">
                                    {skill.technologyAndTools.map(item => {
                                        return <ListGroup.Item>{item}</ListGroup.Item>
                                    })}
                                </ListGroup>
                                <Card.Footer className="text-muted">
                                    <Card.Link href="#">More</Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
