import { useState } from "react"
import Button from "../common/Button";

export const List = () => {
    const [item , setItem] = useState({name: 'Saghar'});
    const [count , setCount] = useState(1);
    const [items , setItems] = useState([]);

    const handleClick = () => {
        setItem({name : 'Ali'})
    }

    const handleClickList = () => {
        // c => current number
        setCount((c) => c + 1);
        setItems([...items , count])
    }
  return (
    <div className="my-4 bg-white dark:bg-gray-800 rounded-md p-7">
        <Button title="Click"
        buttonStyle="p-3 rounded bg-blue-700 text-white border-solid"
        buttonClick={() => handleClick()}/>
        <Button buttonClick={() => handleClickList()}
        title="Update List" 
        buttonStyle="p-3 rounded bg-blue-700 text-white border-solid"
        />
         {item.name}
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
