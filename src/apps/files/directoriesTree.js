import Skills from 'apps/files/views/Skills';
import html from 'assets/img/skills/html.png';
import css from 'assets/img/skills/css.png';
import javascript from 'assets/img/skills/javascript.png';
import react from 'assets/img/skills/react.png';
import php from 'assets/img/skills/php.png';

export const directoriesTree = [
    {
        path: 'main',
        name: 'main',
        type: 'directory',
        extension: 'not applicable',
        children: [
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
                        }
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
                            additional: [
                                'SASS/SCSS'
                            ] 
                        }
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
                                'ES6'
                            ]
                        }
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
                            ]
                        }
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
                            additional: [
                                'mySQL operations'
                            ]
                        }
                    },

                ]
            },
            {
                path: 'main/education',
                name: 'education',
                type: 'directory',
                extension: 'not applicable',
                component: <h1>education</h1>,
                children: [
                    {
                        path: 'main/education/zse.png',
                        name: 'Zespół Szkół Elektrycznych',
                        type: 'file',
                        extenstion: '.png'
                    }
                ]
            },
            {
                path: 'main/experience',
                name: 'experience',
                type: 'directory',
                extension: 'not applicable',
                component: <h1>experience</h1>,
                children: [
                    {
                        path: 'main/experience/clevercode.pdf',
                        name: 'CleverCode',
                        type: 'file',
                        extension: '.png'
                    },
                    {
                        path: 'main/experience/zeto.pdf',
                        name: 'ZETO S.A.',
                        type: 'file',
                        extension: '.pdf'
                    }
                ]
            },
            {
                path: 'main/certificates',
                name: 'certificates',
                type: 'directory',
                extension: 'not applicable',
                component: <h1>certificates</h1>,
                children: []
            }
        ]
    }
]