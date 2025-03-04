import { useState } from "react"
import { Input } from "../common/Input"
import Button from "../common/Button"
import {Textarea} from "../common/Textarea"

export const Form = () => {

    // const [productName , setProductName] = useState ();
    const [formData , setFormData] = useState({
      productName: "",
      discount: "",
      tags: "",
      price: "",
      description: "",
      id: new Date().getTime(),
    });

    
  return (
    <form className="mt-4 mb-20 bg-white dark:bg-gray-800 rounded-md p-7">
       <div className="grid grid-cols-2 grid-rows-1">
         <div>
          <Input 
              placeholder="Product Name"
              label="Product Name" 
              inputStyle="border border-solid border-gray-400"
              value = {formData.productName} 
              onChange = {(e) => 
                setFormData({ ...formData , productName: e.target.value})}
              />
          <Input 
              placeholder="Discount"
              label="Discount" 
              inputStyle="border border-solid border-gray-400"
              value = {formData.discount} 
              onChange = {(e) => 
                setFormData({ ...formData , discount: e.target.value})}
              />
          <Input 
              placeholder="Tags"
              label="Tags" 
              inputStyle="border border-solid border-gray-400"
              value = {formData.tags} 
              onChange = {(e) => 
                setFormData({ ...formData , tags: e.target.value})}
              />
         </div>
         <div>
          <Input
              placeholder="Price"
              label="Price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              inputStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
            />
            <Textarea 
             placeholder="Description"
             label="Description"
             value={formData.description}
             onChange={(e) => 
              setFormData({ ...formData, description: e.target.value})
             }
            />
         </div>
         <div>
          <Button
            buttonStyle="rounded bg-blue-500 py-1 px-7 text-white"
            title="Save"
            type="submit"
            // buttonClick={(e) => submitForm(e)}
          />
        </div>
       </div>
    </form>
  )
}
