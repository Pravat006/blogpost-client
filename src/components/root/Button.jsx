import React from 'react'

function Button({
    text,
    type = 'button',
    bgColor = 'bg-blue-800',
    textColor = 'text-white',
    className = '',
    ...props

}) {
    return (
        <button

            className={`${bgColor} ${textColor} ${className} block py-3 px-4 font-medium text-centeractive:shadow-none rounded-lg shadow md:inline  `} {...props}
        >
            {text}
            
        </button>
    )
}

export default Button