import { Row, Container, Col, Card, Badge } from 'react-bootstrap';
import FadeInSection from './fade-in-section/FadeInSection';

const projects = [
    {
        category: "Enterprise Application",
        title: "Healthcare Data Registry",
        description: `A web application built for CRUD operations on FHIR, this app is built for operators to manage and monitor data about Organizations and Practioners. 
        <br/>- Implemented with security and role based access in mind.
        <br/>- OAuth2 Based Authetication
        <br/>- Support CRUD operations for different FHIR resources
        <br/>- Multiple Language Support`,
        image: "",
        image_style: {},
        role:"Lead Developer",
        technologies:['ReactJS', 'GraphQL', 'NodeJS', 'Docker', 'Kubernetes', 'FHIR', 'SmileCDR']
    },
    {
        category: "Enterprise Application",
        title: "Healthcare Marketplace",
        description: `This is a health exchange marketplace for developers / clients who
        need access to healthcare related API’s. The application stack is
        built on a micro services design pattern, with the front end built
        using Drupal 8 along with ReactJS. Application stack also has
        monitoring capabilities using third party tools like Kibana,
        ElasticSearch, Prometheus etc. Deployments are done on AWS
        using Kubernetes with Docker Images.`,
        image: "",
        image_style: {},
        role:"Technical Lead",
        technologies:['ReactJS', 'NodeJS', 'Docker', 'Kubernetes', 'Drupal','Kafka','Keycloak','Nginx', 'Envoy','Grafana','Kibana','FluentD','Prometheous', 'Amazon Web Service', 'Socket.io']
    },
    {
        category: "Utility",
        title: "Telus Design System - VS Code Extension",
        description: `Worked on building Visual Code extension to make developer’s
        happier while working with Telus Design System (TDS).`,
        image: "",
        image_style: {},
        role:"Solo Developer",
        technologies:['NodeJS', 'Visual studio Code extension']

    },
    {
        category: "Point Of Sale Application",
        title: "Self Checkout - Kohl's",
        description: `An intuitive checkout flow for walk in customers in a large
        e-commerce retail store in US. This application provides the ability
        for customers to scan products, swipe credit/debit cards etc. This
        application is aimed at more tech savvy customers
        who wish to avoid long queues for payment. With this application
        customers can easily pick up items and perform the complete
        checkout process.`,
        image: "",
        image_style: {},
        role:"Technical Lead",
        technologies:['NodeJS', 'Angular','Typescript', 'Electron JS', 'Socket.io', 'Redux - NGRX']
    },
    {
        category: "Enterprise Application",
        title: "Audit reporting & Rule engine",
        description: `A desktop + Web application for building and executing complex
        queries on large data sets, mainly used for Auditing purposes. This
        application can run both as a desktop application using Electron
        and as a web application. Node JS is used to maintain and build
        dynamic queries using Handlebars and work as a proxy between
        different legacy services written in Java.`,
        image: "",
        image_style: {},
        role:"Lead Developer",
        technologies:['NodeJS', 'Angular','Typescript', 'Electron JS', 'Socket.io', 'Docker', 'Handlebars', 'MySQL', 'Hive', 'Java Spring', 'NGINX', 'Docker']

    },
    {
        category: "Enterprise Library",
        title: "Javascript SDK for Verifone Payment device",
        description: `A javascript SDK written in Typescript for abstracting hardware
        communication logic. This SDK is responsible for all the security,
        communication related to Verifone PinPad (A payment device) and
        provides clean and standardised api. This also exposes hooks for
        integrating custom functionalities.`,
        image: "",
        image_style: {},
        role:"Lead Developer",
        technologies:['Typescript', 'CryptoJS']

    },
    {
        category: "Enterprise Module",
        title: "Checkout Flow",
        description: `A pluggable module in an existing native application (Android and
            iOS) to empower customers to scan and complete the checkout
            process on their own mobile device. This module runs inside a
            cordova container leveraging customer information which is
            already present on the device.`,
        image: "",
        image_style: {},
        role:"Lead Developer",
        technologies:['Javascript', 'Cordova', 'iOS - Objective C', 'Android - Java']
    },
    {
        category: "Point Of Sale Application",
        title: "Associate Checkout - Kohl's",
        description: `A complete checkout flow starting from scanning, add offers etc to
        checkout and printing receipts over a Mobile iPad device. This
        application is used during rush in-stores where store associates
        can help customers generate complete order and take payments
        over a mobile device.`,
        image: "",
        image_style: {},
        role:"Lead Developer",
        technologies:['Ionic', 'Angular', 'Typescript', 'iOS - Objective C', 'Cordova']
    },
    {
        category: "Utility",
        title: "Manual test analytics",
        description: `End-2-End tool for monitoring manual testing done on any
        project, using simple hooks and figure out performance of the
        testing team. This helped in tracking the amount of time and
        resources used on manual testing and comparison with UI
        automation to ensure all scenarios are covered. This can be used in
        any application and language by creating simple http hooks. Also
        created Android SDK to help other team members integrate this
        tool.`,
        image: "",
        image_style: {},
        role:"Solo Developer",
        technologies:['NodeJS', 'Angular', 'ExpressJS', 'MongoBD']
    },
    {
        category: "Mobile Commerce",
        title: "Kohl's Mobile App",
        description: `An app designed to help
        Customers find and purchase Products from their hand-held Android devices, also
        providing Location based services, providing special Offers. `,
        image: "",
        image_style: {},
        role:"Developer",
        technologies:['Android - Java', 'Cordova - Worklight', 'Jenkins', 'Gradle', 'SonarQube']
    },
    {
        category: "Mobile Commerce",
        title: "Food & Drinks App",
        description: `Customer facing e-commerce app for one of the leading retail chain in US. This application has features like visual search, voice search, wallet, loyalty, recommendations etc`,
        image: "",//"project_food_app.svg",
        image_style: {},
        role:"Solo Developer",
        technologies:['Android - Java']
    },
    {
        category: "Mobille Commerce",
        title: "Gift App",
        description: `Customer facing e-commerce app for one of the leading retail chain in US. This application has features like visual search, voice search, wallet, loyalty, recommendations etc`,
        image: "",//"project_gift_app.svg",
        image_style: {},
        role:"Solo Developer",
        technologies:['Android - Java']
    },
    {
        category: "Utility",
        title: "Icon Library",
        description: `A library to provide a lot of SVG icons to be used in Ionic and Angular applications`,
        image: "",//"project_icons.svg",
        image_style: {},//{ transform: "translate(-40%, 0)" }
        role:"Solo Developer",
        technologies:['Ionic', 'Javscript', 'Travis', 'Netlify']
    },
    {
        category: "Utility",
        title: "Mobile Dashboard",
        description: `An application to view and manage few things on android device from a web dashboard which is served from within the device. Features include - managing messages, call logs, contacts, battery information, device information, taking notes etc.`,
        image: "",//"project_mobile_dashboard.svg",
        image_style: {},//{ transform: "translate(40%, 0)" }
        role:"Solo Developer",
        technologies:['Android - Java', 'Angular JS', 'NodeJS', 'Electron JS', 'Socket.io']
    }
]

export default function Projects() {
    return (
        <Container id="projects" style={{ marginBottom: "100px", overflow:"hidden" }}>
            <h2 style={{textAlign:"center"}}>PROJECTS</h2>
            <Row>
                {projects.map((project, i) => {
                    const isOdd = i % 2 !== 0;
                    return (
                        <Col className="card-hover my-4" md={12} lg={12}>
                            <FadeInSection style={{ height:"100%"}} side={"bottom"}>

                                <Card style={{  height:"100%", background:  "linear-gradient(60deg, rgba(84, 58, 183, 1) 20%, rgba(0, 172, 193, 1) 140%)" , color:"#ecf0f1"}} >
                                    {(!isOdd && project.image) && <Card.Img variant="bottom" style={project.image_style} className={[styles.project_card_image].join(" ")} src={project.image} />}

                                    <Card.Header>
                                        <Card.Title style={{ fontWeight: 700 }}>{project.title}</Card.Title>
                                        <Card.Subtitle style={{ fontWeight: 300, textTransform: "uppercase", fontSize:"small" }}>{project.category}</Card.Subtitle>
                                    </Card.Header>

                                    <Card.Body style={{ textAlign: "justify", width: !project.image ? "100%" : "calc(100% - 512px)", margin: 0, right: !isOdd ? 0 : "unset" }}>
                                        <Card.Text dangerouslySetInnerHTML={{ __html: project.description }} style={{ fontWeight: 400 }}>
                                        </Card.Text>
                                        
                                        {/* <Badge>{project.role}</Badge>  */}

                                    </Card.Body>

                                    {(isOdd && project.image) && <Card.Img variant="bottom" style={project.image_style} className={[styles.project_card_image, styles.project_card_image_rt].join(" ")} src={project.image} />}
                                
                                <Card.Footer>
                                    
                                    {project.technologies && project.technologies.map((tech, i)=>{
                                        return <Badge key={`${tech}_${i}`}>{tech}</Badge> 
                                    })}
                                </Card.Footer>
                                </Card>
                            </FadeInSection>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
