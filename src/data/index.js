
import zse from 'assets/img/logos/zse.png';
import clevercode from 'assets/img/logos/clevercode.png';
import eduweb from 'assets/img/logos/eduweb.png';
import zetosa from 'assets/img/logos/zetosa.png';
import cke from 'assets/img/logos/cke.png';
import strefakursow from 'assets/img/logos/strefakursow.png';
import jsCertificate from 'assets/docs/js-certificate.pdf';
import pythonCertificate from 'assets/docs/python-certificate.pdf';
import html from 'assets/img/skills/html.png';
import javascript from 'assets/img/skills/javascript.png';
import css from 'assets/img/skills/css.png';
import react from 'assets/img/skills/react.png';
import php from 'assets/img/skills/php.png';
import python from 'assets/img/skills/python.png';
import mysql from 'assets/img/skills/mysql.png';
import portfolio from 'assets/img/portfolio/portfolio.png';


export const portfolioData = [
    {
        assign: 'portfolio',
        status: 'done',
        name: 'Portfolio',
        photo: portfolio,
        github: 'https://github.com/Hisashin7331/portfolio',
        live: '',
    },
    {
        assign: 'portfolio',
        status: 'undone',
        name: 'exPortfolio',
        photo: '',
        github: 'https://github.com/Hisashin7331/notPortfolio',
        live: ''
    }
]

export const resumeData = [
    {
        name: 'education',
        assign: 'resume',
        education: [
            {
                id: 1,
                school: 'Zespół Szkół Elektrycznych',
                field: 'IT Specialist',
                year: '2016 - 2020',
                logo: zse
            }
        ]
    },
    {
        name: 'experience',
        assign: 'resume',
        experience: [
            {
                id: 1,
                type: 'practice',
                company: 'ZETO S.A.',
                position: 'PC Service',
                year: '2018',
                logo: zetosa
            },
            {
                id: 2,
                type: 'intern',
                company: 'Clever Code',
                position: 'PHP dev',
                year: '2019',
                logo: clevercode
            }
        ]
    },
    {
        name: 'certificates',
        assign: 'resume',
        certificates: [
            {
                id: 1,
                name: 'IT Specialist',
                organizer: 'CKE',
                year: '2020',
                logo: cke,
                doc: ''
            },
            {
                id: 2,
                name: 'Foundations of Python Programming',
                organizer: 'strefakursow.pl',
                year: '2020',
                logo: strefakursow,
                doc: pythonCertificate
            },
            {
                id: 3,
                name: 'JavaScript Ecosystem: Introduction',
                organizer: 'strefakursow.pl',
                year: '2020',
                logo: strefakursow,
                doc: jsCertificate
            },
            {
                id: 4,
                name: 'React path',
                organizer: 'eduweb.pl',
                year: '2020',
                logo: eduweb,
                doc: ''
            }
        ]
    },
    {
        name: 'skills',
        assign: 'resume',
        skills: [
            {
                id: 1,
                name: 'HTML',
                level: 4,
                icon: html
            },
            {
                id: 2,
                name: 'CSS',
                level: 4,
                icon: css
            },
            {
                id: 3,
                name: 'JavaScript',
                level: 3,
                icon: javascript
            },
            {
                id: 4,
                name: 'React',
                level: 3,
                icon: react
            },
            {
                id: 5,
                name: 'php',
                level: 1,
                icon: php
            },
            {
                id: 6,
                name: 'Python',
                level: 1,
                icon: python
            },
            {
                id: 7,
                name: 'MySQL',
                level: 2,
                icon: mysql
            }
        ]
    }
]
