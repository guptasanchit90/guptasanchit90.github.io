export const Constants = {
    awards: [
        {
            duration: 'Q4-FY 2018',
            title: 'Excellence Award'
        },
        {
            duration: 'Q3-FY 2016',
            title: 'Engineering Excellence Award'
        },
        {
            duration: 'Q3-FY 2016',
            title: 'Quarterly Team Award'
        },
        {
            duration: 'February 22, 2016',
            link: 'https://www.globallogic.com/news/globallogic-india-successfully-concludes-30hacks-in-association-with-nasscom/',
            title: 'NASSCOM (Hackathon) - 1st prize'
        },
        {
            duration: 'Q2-2015',
            title: 'Quarterly Team Award'
        },
        {
            duration: 'Q4-2014',
            title: 'Quarterly Team Award'
        }
    ],
    education: [
        {
            description: 'Post Graduation Diploma in Advanced Software Design and Development from Center for Development of Advanced Computing (CDAC) Noida.',
            duration: 'February 2012 - August 2012',
            institute: 'C-DAC',
            location: 'Noida',
            title: 'Post Graduation Diploma'
        },
        {
            description: 'Bachelor of Technology in Information Technology from Poornima Institute of Engineering and Technology, Jaipur',
            duration: '2007 - 2011',
            institute: 'Poornima Institute of Engineering and Technology',
            location: 'Jaipur',
            title: 'Bachelor of Technology'
        },
        {
            duration: '2007',
            institute: 'Ryan International School',
            location: 'Greater Noida',
            title: ' Class XII'
        },
        {
            duration: '2005',
            institute: 'Modern Public School',
            location: 'Noida',
            title: 'Class X'
        }
    ],
    projects: [
        {
            description: 'An intuitive checkout flow for walk in customers in a large e-commerce retail store in UI. This applications provides ability for customers to scan products, swipe credit/debit cards etc. This application is aimed at more tech savvy and regular customers who wish to avoid long queues for payment. With this application customers can easily pick up items and perform the complete checkout process without any intervention and leave the store without ever talking to any in-store associate.',
            role: 'Lead',
            skills: ['Angular 6', 'Typescript', 'Redux', 'Electron', 'Node.js'],
            teamSize: '4',
            title: 'Point of Sale application for Windows Desktops'
        },
        {
            description: 'A desktop + Web application for building and executing complex queries on large data set’s, mainly used for Auditing purpose. This application can run both as desktop application using Electron and as a web application. Node JS is used to maintain and build dynamic queries using Handlebars and work as a proxy between different legacy services written in Java. Application is aimed at saving time of manual auditing and sanitation for data.',
            role: 'Developer / Lead',
            skills: ['Angular 5', 'Typescript', 'Redux', 'Electron', 'Node.js', 'MySQL', 'Hive', 'Java Spring', 'NGINX'],
            teamSize: '2',
            title: 'Audit reporting : Rule engine'
        },
        {
            description: 'A javascript SDK written in Typescript for abstracting hardware communication logic. This SDK is responsible to all the security, communication related to Verifone PinPad (A payment device) and provide clean and standardised api. This also exposes hooks for integrating custom functionalities.',
            role: 'Developer / Lead',
            skills: ['Typescript', 'Javascript'],
            teamSize: '2',
            title: 'Javascript SDK for Verifone Payment device'
        },
        {
            description: 'A pluggable  module in an existing native application (Android and iOS) to empower customers scan and complete checkout process on their own mobile device. This module runs inside cordova container leveraging customer information which is already present on device.',
            role: 'Lead',
            skills: ['Ionic 3', 'Angular 4', 'Typescript', 'Redux', 'Cordova'],
            teamSize: '4',
            title: 'Checkout Flow'
        },
        {
            description: 'A complete checkout flow starting from scanning, add offers etc to checkout and printing receipts over a Mobile iPad device. This application is used during rush in-stores where store associates can help customers generate complete order and take payments over a mobile device.',
            role: 'Lead',
            skills: ['Ionic 3', 'Angular 4', 'Typescript', 'Cordova'],
            teamSize: '5',
            title: 'Point of Sale application for IPad’s'
        },
        {
            description: 'End-2-End tool for monitoring manual testing done on any project, using simple hooks and figure out performance of testing team. This helped in tracking the amount of time and resources used on manual testing and compare with UI automation to ensure all scenarios are covered. This can be used in any application and language  by creating simple http hooks. Also created Android SDK to help other team members integrate this tool.',
            role: 'Developer',
            skills: ['Node.js', 'AngularJS', 'ExpressJS', 'MongoDB'],
            teamSize: '1',
            title: 'Manual test analytics'
        },
        {
            description: 'Customer facing e-commerce app for one of the leading retail chain in US. This application has features like visual search, voice search, wallet, loyalty, recommendations etc.',
            role: 'Developer',
            skills: ['Android', 'Cordova'],
            teamSize: '8',
            title: 'E-Commerce mobile app'
        },
        {
            description: 'An app to track leads by on ground sales agents. This application allow sales agents to track and upload sales leads and track their actual sales in a centralized platform. Features include - Image upload, voice notes, predefined forms, capturing signatures and generating performance reports for admin. Also has support to export generated lead as a PDF on device.',
            role: 'Developer',
            skills: ['Android', 'Firebase'],
            teamSize: '1',
            title: 'Sales lead tracking'
        },
        {
            description: 'An application to view and manage few things on android device from a web dashboard which is served from within the device. Features include - managing messages, call logs, contacts, battery information, device information, taking notes etc.',
            role: 'Developer',
            skills: ['Android', 'AngularJS'],
            teamSize: '1',
            title: 'Android management on desktop'
        }

    ],
    projectsOpenSource: [
        {
            description: 'An ongoing project which will allow developers to quickly auto generate code for all languages and frameworks with a few clicks.',
            link: null,
            title: 'Code-Book',
        },
        {
            description: 'A simple ngrx code generator',
            link: 'https://www.npmjs.com/package/ngrx-gen',
            title: 'NGRX GEN'
        },
        {
            description: 'A code generator for using Typescript for Firebase cloud functions with ExpressJS',
            link: 'https://www.npmjs.com/package/firebase-cloud-ts-gen',
            title: 'Firebase, Express + Typescript'
        },
        {
            description: 'A library to provide a lot of SVG icons to be used in Ionic and Angular applications',
            link: 'https://www.npmjs.com/package/ng-svg-icon',
            title: 'SVG Images - Ionic + Angular'
        }
    ],
    skills: [
        { iconName: 'devicon-angularjs-plain', title: 'Angular' },
        { iconName: '', title: 'Ionic' },
        { iconName: 'devicon-typescript-plain', title: 'Typescript' },
        { iconName: '', title: 'RxJS' },
        { iconName: '', title: 'Redux (NGRX)' },
        { iconName: 'devicon-react-plain', title: 'React' },
        { iconName: 'devicon-jasmine-plain', title: 'Jasmine' },
        { iconName: '', title: 'Karma' },

        { iconName: 'devicon-nodejs-plain', title: 'Node.JS' },
        { iconName: '', title: 'Firebase' },
        { iconName: 'devicon-express-original', title: 'ExpressJS' },
        { iconName: '', title: 'Socket.IO' },

        { iconName: '', title: 'Cordova' },
        { iconName: '', title: 'Mobile First platform (Work-light)' },

        { iconName: 'devicon-mongodb-plain', title: 'MongoDB' },
        { iconName: '', title: 'Firebase real-time database' },
        { iconName: '', title: 'Firestore' },
        { iconName: 'devicon-mysql-plain', title: 'MySQL' },
        { iconName: '', title: 'Backendless' },

        { iconName: 'devicon-git-plain', title: 'Git' },
        { iconName: 'devicon-gradle-plain', title: 'Gradle' },
        { iconName: '', title: 'Maven' },

        { iconName: 'devicon-android-plain', title: 'Android' },
        { iconName: '', title: 'RxJava' },
        { iconName: 'devicon-java-plain', title: 'Core Java' },
        { iconName: '', title: 'SQLite' },
        { iconName: '', title: 'Couchbase Lite' }
    ],
    tools: [
        { iconName: 'devicon-visualstudio-plain', title: 'Visual Studio code' },
        { iconName: 'devicon-android-plain', title: 'Android Studio' },
        { iconName: 'devicon-java-plain', title: 'Eclipse' },
        { iconName: '', title: 'XCode' },

        { iconName: 'devicon-google-plain', title: 'Google Analytics' },
        { iconName: '', title: 'Omniture (Adobe)' },
        { iconName: '', title: 'Fabric' },
        { iconName: '', title: 'Firebase Analytics' },
        { iconName: '', title: 'Bugsense' },
        { iconName: '', title: 'Splunk' },

        { iconName: '', title: 'Airwatch' },
        { iconName: '', title: 'Postman' },
        { iconName: '', title: 'Charles Proxy' },
        { iconName: '', title: 'Fiddler' },

        { iconName: '', title: 'Jenkins' },
        { iconName: 'devicon-docker-plain', title: 'Docker' },
        { iconName: '', title: 'JIRA' },
        { iconName: '', title: 'Confluence' },
        { iconName: '', title: 'Asana' },

        { iconName: 'devicon-google-plain', title: 'Google compute engine' },
        { iconName: 'devicon-amazonwebservices-original', title: 'Amazon Web Services' },
        { iconName: '', title: 'Microsoft Azure' },
    ]

} 
