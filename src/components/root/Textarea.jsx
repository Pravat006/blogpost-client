import React,{useId} from 'react'

function Textarea({
    label,
    clasName="",
    ...props
},ref) {
    const id = useId()
  return (
    <div>
        {label && <label
            className='inline-block mb-1 pl-1 font-medium'
            htmlFor={useId()}
        >
            {label}
        </label>}
        <textarea
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 ${clasName}`}
            ref={ref}
            {...props}
            id= {id}
        />
    </div>
  )
}

export default React.forwardRef(Textarea)