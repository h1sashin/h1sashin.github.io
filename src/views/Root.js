import React from 'react'
import { GlobalStyle, MobileStyle } from 'themes/GlobalStyle'
import Desktop from 'views/Desktop'
import store from 'store'
import { Provider } from 'react-redux'
import { isMobile, isBrowser } from 'react-device-detect'
import Mobile from 'views/Mobile'

const Root = () => {
    return (
        <Provider store={store}>
            {isBrowser && (
                <>
                    <GlobalStyle />
                    <Desktop />
                </>
            )}
            {isMobile && (
                <>
                    <MobileStyle />
                    <Mobile />
                </>
            )}
        </Provider>
    )
}

export default Root
