import { useEffect, useState } from "react";
import { Card } from "../common/Card";
import { Input } from "../common/Input";

export const LocalStorage = () => {
    const [name ,setName] = useState("");

    useEffect(() => {
       const savedName = localStorage.getItem("name");
       if(savedName){
        setName(savedName);
       }
    },[])

    useEffect(() => {
        localStorage.setItem("name" , name);
    },[name])
    return (
        <Card>
            <Input 
            placeholder="Name"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            inputStyle=" bg-gray-100 placeholder:text-sm rounded p-1 mb-2 border-solid border border-gray-400"
            />
        </Card>
    );
}