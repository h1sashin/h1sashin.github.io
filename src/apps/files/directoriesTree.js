export const directoriesTree = {
    path: 'main',
    name: 'main',
    type: 'directory',
    children: [
        {
            path: 'main/skills',
            name: 'skills',
            type: 'directory',
            component: <h1>skills</h1>,
            children: [
                {
                    path: 'main/skills/html.txt',
                    name: 'html',
                    type: 'file',
                    extension: '.txt'
                },
                {
                    path: 'main/skills/css.txt',
                    name: 'css',
                    type: 'file',
                    extension: '.txt'
                },
                {
                    path: 'main/skills/javascript.txt',
                    name: 'javascript',
                    type: 'file',
                    extenstion: '.txt'
                },
                {
                    path: 'main/skills/react.txt',
                    name: 'react',
                    type: 'file',
                    extension: '.txt'
                },
                {
                    path: 'main/skills/php.txt',
                    name: 'php',
                    type: 'file',
                    extension: '.txt'
                },
                {
                    path: 'main/skills/python.txt',
                    name: 'python',
                    type: 'file',
                    extenstion: '.txt'
                },
                {
                    path: 'main/skills/mysql.txt',
                    name: 'mysql',
                    type: 'file',
                    extension: '.txt'
                }
            ]
        },
        {
            path: 'main/education',
            name: 'education',
            type: 'directory',
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
            component: <h1>experience</h1>,
            children: [
                {
                    path: 'main/experience/clevercode',
                    name: 'CleverCode',
                    type: 'file',
                    extension: '.png'
                },
                {
                    path: 'main/experience/zeto',
                    name: 'ZETO S.A.',
                    type: 'file',
                    extension: '.png'
                }
            ]
        },
        {
            path: 'main/certificates',
            name: 'certificates',
            type: 'directory',
            component: <h1>certificates</h1>,
            children: []
        }
    ]
}