import { useState } from "react"

export const Input = ({
    placeholder = 'placeholder..' , 
    type = 'text' ,
    inputStyle ,
    label = 'label' ,
    inputError ,
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
       <p className="text-red-500 text-sm">{inputError}</p>
    </div>
  )
}
