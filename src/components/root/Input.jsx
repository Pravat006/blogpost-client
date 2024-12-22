import React, { useId } from 'react'


const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id= useId()
    return (
        <div>
            {label && <label
                className='inline-block mb-1 pl-1 font-medium'
                htmlFor={id}
            >
                {label}
            </label>}
            <input
                    className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg  ${className}`}
                    ref={ref}
                    {...props}
                    id={id}
            />
        </div>
    )
})


export default Input