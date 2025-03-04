import { useState } from "react"

export const Input = ({
    placeholder = 'placeholder..' , 
    type = 'text' ,
    inputStyle ,
    label = 'label' ,
    ...props  
}) => {
    
  return (
    <div className="flex flex-col">
        <label className="text-gray-700 mb-1 text-sm dark:text-gray-200" htmlFor={label}>{label}</label>
        <input 
        id= {label}
        type={type} 
        className={inputStyle} 
        placeholder={placeholder}
        {...props}
       />
    </div>
  )
}
