import { Card } from "./components/Card"


import { useState } from "react"
import { Stepper } from "./components/stepper/Stepper";
import { List } from "./components/list/List";
import { Form } from "./components/form/Form";

function App() {

  const [isOn , setIsOn] = useState(false);
  const onHandleToggle = () => setIsOn(!isOn);

  return (
    <div className="bg-white rounded-lg p-4">
      {/* <div>helooo</div>
      <div>zeinabbb</div>
      <div>sagharrr</div> */}
      <Card></Card>
       
       <button onClick={onHandleToggle} className={
        isOn ? "bg-blue-200 text-black rounded p-2"
        : "bg-blue-600 text-white rounded p-2"
       }>
       {isOn ? "Turn Off" : "Turn On"}</button>
       <Stepper></Stepper>
       {/* <List></List> */}
       <Form></Form>
    </div>    
  )
}

export default App
