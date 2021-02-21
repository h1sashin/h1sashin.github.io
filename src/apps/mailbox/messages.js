const randomColor = () => {
    const generateColor = () => {
        return Math.floor(Math.random() * (0, 255))
    }
    return `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`
}

export const messages = [
    {
        id: 0,
        title: 'New message',
        message: 'addNew',
    },
    {
        id: 1,
        from: 'cdprfannumber1@gmail.com',
        title: 'Fix cyberpunk',
        message: `fix these bugs, this game is unplayable. Refund me my money you don't deserve it.`,
        color: randomColor(),
    },
    {
        id: 2,
        from: 'unknown',
        title: '01001110',
        message:
            '00110010 00110001 00110011 00110111 00100000 00111001 00111001 00110111 00100000 00110010 00110001 00110001 00110101',
        color: randomColor(),
    },
    {
        id: 3,
        from: 'hiszaszin@gmail.com',
        title: `About the website`,
        message: `This website isn't currently what I want it to be, It's not fully styled as should be, and not fully functional as I want it to be. I'll keep updating it till it is what I hava in my mind. New apps, new features, more personalisation, more console functionality, pseudo web browser, cookies etc.`,
        color: randomColor(),
    },
]
