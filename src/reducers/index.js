const initialState = {
    files: {
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 800,
        height: 450,
        appName: 'files',
        version: '0.1'
    },
    settings: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 800,
        height: 450,
        appName: 'settings',
        version: '0.1'
    },
    mailbox: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 800,
        height: 450,
        appName: 'mailbox',
        version: '0.1'
    },
    console: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 800,
        height: 450,
        appName: 'console',
        version: '0.1'
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_APP':
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    isOpen: !state[action.payload.app].isOpen
                }
            }
        case 'MINIMIZE_APP':
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    isMinimized: !state[action.payload.app].isMinimized
                }
            }
        case 'MAXIMIZE_APP':
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    isMaximized: !state[action.payload.app].isMaximized
                }
            }
        case 'UPDATE_SIZE':
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    height: [action.payload.ref.offsetHeight],
                    width: [action.payload.ref.offsetWidth],
                    x: [action.payload.position.x],
                    y: [action.payload.position.y]
                }
            }
        case 'UPDATE_POSITION':
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    x: [action.payload.d.x],
                    y: [action.payload.d.y]
                }
            }
        default:
            return state;
    }
};

export default rootReducer;