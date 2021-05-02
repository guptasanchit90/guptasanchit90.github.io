import { faCodeBranch, faDatabase, faLaptopCode, faMobileAlt, faServer, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
''
const skills = [
    {
        category: "Front-End Development",
        icon: faLaptopCode,
        technologyAndTools: ['Javascript', 'React', 'Angular', 'HTML', 'CSS']
    },
    {
        category: "Back-End Development",
        icon: faServer,
        technologyAndTools: ['Node JS', 'Java', 'PHP']
    },
    {
        category: "Database",
        icon: faDatabase,
        technologyAndTools: ['MySQL', 'MongoDB', 'Firebase', 'Firestore']
    },
    {
        category: "Version Control",
        icon: faCodeBranch,
        technologyAndTools: ['GIT', 'Subversion']
    },
    {
        category: "Project Management",
        icon: faTasks,
        technologyAndTools: ['JIRA', 'Gitlab', 'Trello', 'Aha', 'Confluence']
    },
    {
        category: "Mobile Development",
        icon: faMobileAlt,
        technologyAndTools: ['Android', 'iOS', 'Cordova', 'React Native']
    }
]

export default function Skills() {
    return (

        <Container id="skills" className="p-4">

            <Row>
                {skills.map((skill, i) => {
                    return (
                        <Col md={6} key={i}>

                            <Card style={{background:"transparent"}} className="px-2 m-4 pb-4">

                                <div className="my-4" style={{ background: "var(--gradient-bg-darker)", borderRadius: "50%", width: "100px", height: "100px", margin: "auto" }}>
                                    <FontAwesomeIcon style={{ display: "block", margin: "auto", height: "100%" }} size={"2x"} icon={skill.icon} color={"white"} />
                                </div>

                                <Card.Body>
                                    <Card.Title>{skill.category}</Card.Title>
                                </Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>

    )
}
