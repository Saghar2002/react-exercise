import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [count , setCount] = useState(0);
    const prevCountRef = useRef(null);
    
    useEffect(() =>{
        prevCountRef.current = count;
    },[count])
    
    const prevConut = prevCountRef.current;

    // const inputRef = useRef(null);

    // useEffect(() => {
    //     console.log(inputRef.current)
    //     inputRef.current.focus();
    // }, [])

  return (
    <div>
        {/* <input ref={inputRef} className='p-3' type="text" /> */}
        <p>{count}</p>
        <p>{prevConut}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseRef