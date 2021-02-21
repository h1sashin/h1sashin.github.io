import React from 'react'

import { Styled, Bar } from './styles'

const Topbar = ({ path }) => {
    return (
        <Styled>
            <Bar>
                <h5>{path}</h5>
            </Bar>
        </Styled>
    )
}

export default Topbar
