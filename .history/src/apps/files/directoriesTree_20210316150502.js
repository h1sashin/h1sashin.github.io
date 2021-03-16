import html from 'assets/img/skills/html.png'
import css from 'assets/img/skills/css.png'
import javascript from 'assets/img/skills/javascript.png'
import react from 'assets/img/skills/react.png'
import php from 'assets/img/skills/php.png'
import zse from 'assets/img/logos/zse.png'
import clevercode from 'assets/img/logos/clevercode.png'
import zeto from 'assets/img/logos/zetosa.png'
import cke from 'assets/img/logos/cke.png'
import weatherApp from 'assets/img/portfolio/weather-app.png'
import Experience from './views/Experience'
import Certificates from './views/Certificates'
import Skills from './views/Skills'
import Education from './views/Education'
import Portfolio from './views/Portfolio'

export const directoriesTree = [
    {
        path: 'main',
        name: 'main',
        type: 'directory',
        extension: 'not applicable',
        children: [

                    {
                        path: 'main/portfolio/weather-app.lnk',
                        name: 'weather-app',
                        type: 'file',
                        extension: '.lnk',
                        image: weatherApp,
                        component: <Portfolio />,
                        data: {
                            about: `Simple React Weather-app I made to learn about API. It uses openWeatherMap API to get data about current weather and 5day forecast in cities around the world`,
                            github:
                                'https://github.com/Hisashin7331/weather-app',
                            live:
                                'https://hisashin7331-weather-app.herokuapp.com/',
                        },
                    },
                ],
            },
            {
                path: 'main/skills',
                name: 'skills',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/skills/html.txt',
                        name: 'HTML',
                        type: 'file',
                        extension: '.txt',
                        image: html,
                        component: <Skills />,
                        data: {
                            level: 4,
                            additional: ['HTML5'],
                        },
                    },
                    {
                        path: 'main/skills/css.txt',
                        name: 'CSS',
                        type: 'file',
                        extension: '.txt',
                        image: css,
                        component: <Skills />,
                        data: {
                            level: 4,
                            additional: ['SASS/SCSS', 'RWD'],
                        },
                    },
                    {
                        path: 'main/skills/javascript.txt',
                        name: 'JavaScript',
                        type: 'file',
                        extension: '.txt',
                        image: javascript,
                        component: <Skills />,
                        data: {
                            level: 4,
                            additional: [
                                'ES6',
                                'async/await',
                                'Promises',
                                'array methods',
                            ],
                        },
                    },
                    {
                        path: 'main/skills/react.txt',
                        name: 'React',
                        type: 'file',
                        extension: '.txt',
                        image: react,
                        component: <Skills />,
                        data: {
                            level: 3,
                            additional: [
                                'styled components',
                                'router',
                                'redux',
                                'prop types',
                            ],
                        },
                    },
                    {
                        path: 'main/skills/php.txt',
                        name: 'php',
                        type: 'file',
                        extension: '.txt',
                        image: php,
                        component: <Skills />,
                        data: {
                            level: 2,
                            additional: ['mySQL operations'],
                        },
                    },
                ],
            },
            {
                path: 'main/education',
                name: 'education',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/education/zse.png',
                        name: 'Zespół Szkół Elektrycznych',
                        type: 'file',
                        extension: '.png',
                        image: zse,
                        component: <Education />,
                        data: {
                            yearsFrom: 2016,
                            yearsTo: 2020,
                            field: 'IT Specialist',
                        },
                    },
                ],
            },
            {
                path: 'main/experience',
                name: 'experience',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/experience/clevercode.pdf',
                        name: 'CleverCode',
                        type: 'file',
                        extension: '.pdf',
                        image: clevercode,
                        component: <Experience />,
                        data: {
                            year: 2019,
                            field: 'PHP dev',
                        },
                    },
                    {
                        path: 'main/experience/zeto.pdf',
                        name: 'ZETO S.A.',
                        type: 'file',
                        extension: '.pdf',
                        image: zeto,
                        component: <Experience />,
                        data: {
                            year: 2018,
                            field: 'PC Service',
                        },
                    },
                ],
            },
            {
                path: 'main/certificates',
                name: 'certificates',
                type: 'directory',
                extension: 'not applicable',
                children: [
                    {
                        path: 'main/experience/it-specialist.pdf',
                        name: 'IT Specialist',
                        type: 'file',
                        extension: '.pdf',
                        image: cke,
                        component: <Certificates />,
                        data: {
                            acquired: 2020,
                            including: ['E.12', 'E.13', 'E.14'],
                        },
                    },
                ],
            },
        ],
    },
]
