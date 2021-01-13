const initialState = {
    notifications: []
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {
                notifications: [
                    ...state.notifications,
                    {
                        title: action.payload.title,
                        message: action.payload.message,
                        id: action.payload.id
                    }
                ]
            }
        case 'REMOVE_NOTIFICATION':
            return {
                notifications: [
                    ...state.notifications.filter(item => item.id !== action.payload.id)
                ]
            }
        default:
            return state;
    }
};

export default notificationReducer;