import React from 'react'
import file from 'assets/img/places/dir.svg'

import { Styled, Ul, Li, LiElement } from './styles'

const Sidebar = ({ directoriesTree, updatePath }) => {
    const displayTree = (array = directoriesTree) => {
        return array.map(item => {
            return (
                <Li key={item.name}>
                    <LiElement
                        onClick={() => updatePath(item.path)}
                        type='button'
                    >
                        <img
                            src={item.image || file}
                            alt={`${item.name} logo`}
                        />
                        {item.name}
                    </LiElement>
                    {item.children && (
                        <Ul>{displayTree(item.children)}</Ul>
                    )}
                </Li>
            )
        }, null)
    }
    return (
        <Styled>
            <Ul>{displayTree()}</Ul>
        </Styled>
    )
}

export default Sidebar
