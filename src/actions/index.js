// import axios from 'axios';
// import { config } from 'config';

// const { accuWeatherAPIKey } = config;

export const openApp = (app) => {
    return {
        type: 'OPEN_APP',
        payload: { 
            app
        }
    }
}

export const openAppMobile = (app) => {
    return {
        type: 'OPEN_APP_MOBILE',
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

export const minimizeAppMobile = (app) => {
    return {
        type: 'MINIMIZE_APP_MOBILE',
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

export const switchMode = (mode) => {
    return {
        type: 'SWITCH_MODE',
        payload: { mode }
    }
}

export const switchStyle = (style) => {
    return {
        type: 'SWITCH_STYLE',
        payload: { style }
    }
}

export const changePrimary = (color) => {
    return {
        type: 'CHANGE_PRIMARY',
        payload: { color }
    }
}

export const updateTaskbarTransparency = (transparency) => {
    const updatedTransparency = (transparency/2 + 50)/100;
    return {
        type: 'UPDATE_TASKBAR_TRANSPARENCY',
        payload: {
            transparency: updatedTransparency
        }
    }
}

export const switchIconType = (type) => {
    return {
        type: 'SWITCH_ICON_TYPE',
        payload: { type }
    }
} 

export const switchDateHide = (hide) => {
    return {
        type: 'SWITCH_DATE_HIDE',
        payload: { hide }
    }
}

export const switchDateFormat = (format) => {
    return {
        type: 'SWITCH_DATE_FORMAT',
        payload: { format }
    }
} 

export const addNotification = (title, message, id) => {
    return {
        type: 'ADD_NOTIFICATION',
        payload: {
            title,
            message,
            id
        }
    }
}

export const removeNotification = (id) => {
    return {
        type: 'REMOVE_NOTIFICATION',
        payload: {
            id
        }
    }
}

export const changeNotificationsPosition = (position) => {
    return {
        type: 'CHANGE_NOTIFICATIONS_POSITION',
        payload: {
            position
        }
    }
}

export const closeAllApps = () => {
    return {
        type: 'CLOSE_ALL_APPS'
    }
} 