import { useState } from "react"
import { Input } from "../common/Input"

export const Form = () => {

    const [productName , setProductName] = useState ();
    
  return (
    <form className="mt-4 mb-20 bg-white dark:bg-gray-800 rounded-md p-7">
       <div className="grid grid-cols-2 grid-rows-1">
       <Input 
            placeholder="Product Name"
            label="Product Name" 
            inputStyle="border border-solid border-gray-400"
            value = {productName} 
            onChange = {(e) => setProductName(e.target.value)}
            />
       </div>
    </form>
  )
}
