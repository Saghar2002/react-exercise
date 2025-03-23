import React, { useReducer } from 'react'
import Button from '../../../common/Button'


// function reducer (state , action) {
// switch (action.type){
//     case "inc" :
//         return{ count : state.count + 1 };
//     case "dec" :
//         return{ count : state.count - 1 };
//     case "Unknown" :
//         throw new Error();
// }
// }

const initialState = {
    cards : [] ,
}

function reducer (state , action) {
    switch (action.type) {
        case "addItem" :
            return {
                ...state, 
                cards : [...state.cards, action.item],
            };

        case "removeItem" :
            return {
                ...state, 
                cards: state.cards.filter((item, index) => index !== action.index),
            };

            default : 
            throw new Error();
    }
}

// const initialState = {
//     name : "" , 
//     email : "" 
// };


const UseReducerPage = () => {

//   const [state , dispath] = useReducer(reducer , {count : 0})
const [state , dispatch] = useReducer(reducer , initialState)

// const [state , dispatch] = useReducer(reducer , initialState)


  return (
    // <div>
    //     <p>Count : {state.count} </p>
    //     <Button 
    //     buttonStyle=" bg-blue-600 mx-2 text-white p-2"
    //     title='increment'
    //     buttonClick={ () => dispath({type : "inc"})}
    //     />
    //     <Button 
    //     buttonStyle=" bg-blue-600 mx-2 text-white p-2"
    //     title='decrement'
    //     buttonClick={ () => dispath({type : "dec"})}
    //     />
    //     <Button 
    //     buttonStyle=" bg-blue-600 mx-2 text-white p-2"
    //     title='Unknown'
    //     buttonClick={ () => dispath({type : "Unknown"})}
    //     />
    // </div>

    <div>
        <Button 
        buttonStyle=" bg-blue-600 mx-2 text-white p-2"
        title='Add Apple'
        buttonClick={ () => dispatch({type : "addItem" , item : "Apple"})}
        />
        <Button 
        buttonStyle=" bg-blue-600 mx-2 text-white p-2"
        title='Add Orange'
        buttonClick={() => dispatch({ type: "addItem", item: "Orange" })}
        />
        <h3>List :</h3>

         <ul>
             {state.cards.map((item , index) => (
                <li key={index}>
                {item}
                <Button 
                 buttonStyle="bg-red-600 mx-2 text-white p-2 m-2"
                 title="Remove"
                 buttonClick={() => dispatch({ type : "removeItem" , index})}
                 />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UseReducerPage