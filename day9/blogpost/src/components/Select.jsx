import React,{useId} from 'react'

const Select  = React.forwardRef( function Select({
    options,
    lable,
    className,
    ...props
},ref) {
    const id =useId()
  return (
    <div className='w-full'>{lable&&<label htmlFor={id}className=''>
        </label>}
    
    <select
     name="" {...props} id={id}
    className={`${className}`}>
        {options?.map((option)=>(
            <option key={option} value={option}>
            {option}
            </option>
        ))}

    </select>
    </div>
  )
})

export default Select