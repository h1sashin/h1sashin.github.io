export const openApp = (app) => {
    return {
        type: 'OPEN_APP',
        payload: { 
            app
        }
    }
}

export const minimizeApp = (app) => {
    return {
        type: 'MINIMIZE_APP',
        payload: { app }
    }
}

export const maximizeApp = (app) => {
    return {
        type: 'MAXIMIZE_APP',
        payload: { app }
    }
}

export const updateSize = (app, e, direction, ref, delta, position) => {
    return {
        type: 'UPDATE_SIZE',
        payload: {
            app,
            ref,
            position
        }
    }
}

export const updatePosition = (app, e, d) => {
    return {
        type: 'UPDATE_POSITION',
        payload: {
            app,
            e,
            d
        }
    }
}