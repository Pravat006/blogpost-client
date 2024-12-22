import React from 'react'

function Select({
    options,
    label,
    className,
    ...props

}, ref) {
    const id = useId()
    return (
        <div className='w-full'

        >
            {label && <label htmlFor={id} className=''></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg  text-black outline-none focus:bg-gray-50 duration-200 border bg-gray-200 w-full ${className} `}
            >
                {
                    // the program might be crash if there no values in in the options array so we need to loop it optionally 
                    options?.map((option) => (
                        <option key={option} value={option} >
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)