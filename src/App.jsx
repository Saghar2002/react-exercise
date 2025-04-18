import { Carth } from "./components/Carth"
import { useState } from "react"
import { Stepper } from "./components/stepper/Stepper";
import { List } from "./components/list/List";
import { Form } from "./components/form/Form";
import { ProductList } from "./components/productList/ProductList";
import { Card } from "./components/common/Card";
import { Timer } from "./components/timer/Timer";
import { Resize } from "./components/resize/Resize";
import { TitleChanger } from "./components/titleChanger/TitleChanger";
import { LocalStorage } from "./components/localStorage/LocalStorage";
import ConditionalRendering from "./components/conditionalRendering/ConditionalRendering";
import UseReducerPage from "./components/pages/hooks/useReducer/UseReducerPage";
import { PostPage } from "./components/posts/PostPage";
import UseRef from "./components/pages/hooks/useReducer/UseRef";
import Usememo from "./components/pages/hooks/useReducer/Usememo";
import { Link } from "react-router-dom";
import { AddUser } from "./components/pages/hooks/AddUser";
import { PostComments } from "./components/pages/hooks/PostComments";
function App() {

  const [isOn , setIsOn] = useState(false);
  const onHandleToggle = () => setIsOn(!isOn);
  const [items , setItems] = useState([]);

  return (
    <div className="bg-gray-200 rounded-lg p-4">
      <h1>صفحه اصلی</h1>
      <Link to="/users">
      <button className="bg-purple-600 text-slate-200 p-2 m-2">برو به صفحه کاربران</button>
      </Link>
      {/* <PostComments></PostComments> */}
      <AddUser></AddUser>
      <Usememo></Usememo>
      <UseRef></UseRef>
      <PostPage></PostPage>
      <UseReducerPage></UseReducerPage>
      <ConditionalRendering></ConditionalRendering>
      <LocalStorage></LocalStorage>
      <TitleChanger></TitleChanger>
      <Resize></Resize>
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
