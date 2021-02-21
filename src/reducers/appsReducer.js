const initialState = {
    files: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 960,
        height: 540,
        appName: 'files',
        version: '0.2',
    },
    settings: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 1008,
        height: 567,
        appName: 'settings',
        version: '0.1',
    },
    mailbox: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 960,
        height: 540,
        appName: 'mailbox',
        version: '0.1',
    },
    console: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 960,
        height: 540,
        appName: 'console',
        version: '0.1',
    },
    weather: {
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        x: 100,
        y: 100,
        width: 960,
        height: 540,
        appName: 'weather',
        version: '0.1',
    },
}

let prevState = {}

const appsReducer = (state = initialState, action) => {
    let obj = {}
    switch (action.type) {
        case 'OPEN_APP':
            prevState = state
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    isOpen: !state[action.payload.app].isOpen,
                },
            }
        case 'OPEN_APP_MOBILE':
            prevState = state
            obj = {}
            Object.keys(state).map(element => {
                if (element === action.payload.app) {
                    Object.assign(obj, {
                        [action.payload.app]: {
                            ...state[action.payload.app],
                            isOpen: !state[action.payload.app].isOpen,
                            isMinimized: false,
                        },
                    })
                } else {
                    Object.assign(obj, {
                        [element]: {
                            ...state[element],
                            isMinimized: state[element].isOpen
                                ? true
                                : state[element].isMinimized,
                        },
                    })
                }
            })
            return {
                ...obj,
            }
        case 'MINIMIZE_APP':
            prevState = state
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    isMinimized: !state[action.payload.app]
                        .isMinimized,
                },
            }
        case 'MINIMIZE_APP_MOBILE':
            prevState = state
            obj = {}
            Object.keys(state).map(element => {
                if (element === action.payload.app) {
                    Object.assign(obj, {
                        [action.payload.app]: {
                            ...state[action.payload.app],
                            isMinimized: false,
                        },
                    })
                } else {
                    Object.assign(obj, {
                        [element]: {
                            ...state[element],
                            isMinimized: state[element].isOpen
                                ? true
                                : state[element].isMinimized,
                        },
                    })
                }
            })
            return {
                ...obj,
            }
        case 'MAXIMIZE_APP':
            prevState = state
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    isMaximized: !state[action.payload.app]
                        .isMaximized,
                },
            }
        case 'UPDATE_SIZE':
            prevState = state
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    height: [action.payload.ref.offsetHeight],
                    width: [action.payload.ref.offsetWidth],
                    x: [action.payload.position.x],
                    y: [action.payload.position.y],
                },
            }
        case 'UPDATE_POSITION':
            prevState = state
            return {
                ...state,
                [action.payload.app]: {
                    ...state[action.payload.app],
                    x: [action.payload.d.x],
                    y: [action.payload.d.y],
                },
            }
        case 'CLOSE_ALL_APPS':
            prevState = state
            // eslint-disable-next-line no-case-declarations
            obj = {}
            Object.keys(state).map(element => {
                Object.assign(obj, {
                    [element]: {
                        ...state[element],
                        isMinimized: !!state[element].isOpen,
                    },
                })
            })
            return {
                ...obj,
            }

        case 'PREV_STATE':
            return {
                ...prevState,
            }
        default:
            return state
    }
}

export default appsReducer
