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
        description: "Exprienced in building web applications using React, Angular along with help of HTML, CSS following modern web development standards",
        technologyAndTools: ['Javascript', 'React', 'Angular', 'HTML', 'CSS']
    },
    {
        category: "Back-End Development",
        icon: faServer,
        description: "Over the years I have worked on a wide range of Applications using NodeJS with help ExpressJS, Socket.IO, GraphQL and other awesome Modules.",
        technologyAndTools: ['Node JS', 'Java', 'PHP']
    },
    {
        category: "Database",
        icon: faDatabase,
        description: "Databases I have extensively used in the past include MySQL, MongoDB, Postgres and FireStore",
        technologyAndTools: ['MySQL', 'MongoDB', 'Firebase', 'Firestore']
    },
    {
        category: "Dev-Ops",
        icon: faCodeBranch,
        description:"Tools like Docker, Kubernetes, GIT, Jenkins have become part of my daily work.",
        technologyAndTools: ['GIT', 'Subversion']
    },
    {
        category: "Project Management",
        icon: faTasks,
        description:"With experince come's resposiblity, over the year I have mentored team of different size going upto 18 developers",
        technologyAndTools: ['JIRA', 'Gitlab', 'Trello', 'Aha', 'Confluence']
    },
    {
        category: "Mobile Development",
        icon: faMobileAlt,
        description:"Over the years I have worked on countless Mobile applications using frameworkes like Cordova, React Native and many more",
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
                                    {skill.description}
                                </Card.Text>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>

    )
}
