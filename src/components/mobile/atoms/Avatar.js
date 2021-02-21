import React from 'react'

const Avatar = ({ color, from, size }) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    height: `${(size * 2) / 3}px`,
                    width: `${(size * 2) / 3}px`,
                    borderRadius: '50%',
                    background: color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: `${(size * 2) / 6}px`,
                }}
            >
                {from[0].toUpperCase()}
            </div>
        </div>
    )
}

export default Avatar
