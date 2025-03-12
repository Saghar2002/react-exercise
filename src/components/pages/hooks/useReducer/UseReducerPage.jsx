import React, { useReducer } from 'react'
import Button from '../../../common/Button'


function reducer (state , action) {
switch (action.type){
    case "inc" :
        return{ count : state.count + 1 };
    case "dec" :
        return{ count : state.count - 1 };
    case "Unknown" :
        throw new Error();
}
}

const UseReducerPage = () => {

  const [state , dispath] = useReducer(reducer , {count : 0})

  return (
    <div>
        <p>Count : {state.count} </p>
        <Button 
        buttonStyle=" bg-blue-600 mx-2 text-white p-2"
        title='increment'
        buttonClick={ () => dispath({type : "inc"})}
        />
        <Button 
        buttonStyle=" bg-blue-600 mx-2 text-white p-2"
        title='decrement'
        buttonClick={ () => dispath({type : "dec"})}
        />
        <Button 
        buttonStyle=" bg-blue-600 mx-2 text-white p-2"
        title='Unknown'
        buttonClick={ () => dispath({type : "Unknown"})}
        />
    </div>
  )
}

export default UseReducerPage