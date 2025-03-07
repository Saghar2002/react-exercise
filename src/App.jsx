import { Carth } from "./components/Carth"
import { useState } from "react"
import { Stepper } from "./components/stepper/Stepper";
import { List } from "./components/list/List";
import { Form } from "./components/form/Form";
import { ProductList } from "./components/productList/ProductList";
import { Card } from "./components/common/Card";
import { Timer } from "./components/timer/Timer";

function App() {

  const [isOn , setIsOn] = useState(false);
  const onHandleToggle = () => setIsOn(!isOn);
  const [items , setItems] = useState([]);

  return (
    <div className="bg-gray-200 rounded-lg p-4">
      <Timer></Timer>
      {/* <div>helooo</div>
      <div>zeinabbb</div>
      <div>sagharrr</div> */}
      <Carth></Carth>
       
       <button onClick={onHandleToggle} className={
        isOn ? "bg-blue-200 text-black rounded p-2"
        : "bg-blue-600 text-white rounded p-2"
       }>
       {isOn ? "Turn Off" : "Turn On"}</button>
       <Stepper />
       <List />
       <Form items={items} setItems={(items) => setItems(items)}/>
       <ProductList items={items}/>
    </div>    
  )
}

export default App
