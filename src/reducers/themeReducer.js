const initialState = {
    taskbarStyle: 1,
    windowStyle: 1,
    wallpaper: 1,
    primaryColor: '#80CED6',
    lightmode: {
        primary: '#181818',
        secondary: '#000000',
        tertiary: '#B2C2BF',
        text: '#FFFFFF'
    },
    darkmode: {
        primary: '#FFFFFF',
        secondary: '#2A2D38',
        tertiary: '#191B21',
        text: '#000000'
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default rootReducer;