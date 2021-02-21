const initialState = {
    style: 'basic',
    primary: '#80CED6',
    mode: 'dark',
    iconType: 'icon',
    taskbarTransparency: 0.9,
    dateFormat: '24h',
    dateHide: 'hide',
    notificationsPosition: 'topRight',
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_MODE':
            return {
                ...state,
                mode: action.payload.mode,
            }
        case 'SWITCH_STYLE':
            return {
                ...state,
                style: action.payload.style,
            }
        case 'CHANGE_PRIMARY':
            return {
                ...state,
                primary: action.payload.color,
            }
        case 'UPDATE_TASKBAR_TRANSPARENCY':
            return {
                ...state,
                taskbarTransparency: action.payload.transparency,
            }
        case 'SWITCH_ICON_TYPE':
            return {
                ...state,
                iconType: action.payload.type,
            }
        case 'SWITCH_DATE_HIDE':
            return {
                ...state,
                dateHide: action.payload.hide,
            }
        case 'SWITCH_DATE_FORMAT':
            return {
                ...state,
                dateFormat: action.payload.format,
            }
        case 'CHANGE_NOTIFICATIONS_POSITION':
            return {
                ...state,
                notificationsPosition: action.payload.position,
            }
        default:
            return state
    }
}

export default themeReducer
