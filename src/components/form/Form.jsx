import { useState } from "react"
import { Input } from "../common/Input"
import Button from "../common/Button"
import {Textarea} from "../common/Textarea"
import { Card } from "../common/Card"

export const Form = ({items , setItems}) => {

    // const [productName , setProductName] = useState ();
    const [formData , setFormData] = useState({
      productName: "",
      discount: "",
      tags: "",
      price: "",
      description: "",
      id: new Date().getTime(),
    });

    const [productNameError , setProductNameError] = useState("");

    const submitForm = (e) => {
      e.preventDefault();
      if(formData.price < 100000){
        alert("باید مبلغ بیشتر از 100000 باشد.");
        return ;
      }

      if(!formData.productName.length){
        setProductNameError("نام محصول اجباری است.");
        return;
      }

      console.log(formData)
      setItems([ ...items , formData])
      resetForm();
    }
  


    const resetForm = () => {
      setFormData({
        productName: "",
        discount: "",
        tags: "",
        price: "",
        description: "",
        id: new Date().getTime(),
      });
      setProductNameError("");
    };
    
  return (
    <form onSubmit={submitForm}>
      <Card>
      <div className="grid grid-cols-2 grid-rows-1">
         <div>
          <Input 
              placeholder="Product Name"
              label="Product Name" 
              inputStyle={`bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border ${
                productNameError ? "border-red-400" : "border-gray-400"
              }`}
  
              inputError={productNameError}
              value = {formData.productName} 
              onChange = {(e) => 
                setFormData({ ...formData , productName: e.target.value})}
              />
          <Input 
              placeholder="Discount"
              label="Discount" 
              inputStyle="bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
              value = {formData.discount} 
              onChange = {(e) => 
                setFormData({ ...formData , discount: e.target.value})}
              />
          <Input 
              placeholder="Tags"
              label="Tags" 
              inputStyle="bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
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
             textareaStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
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
      </Card>
    </form>
  )
}
