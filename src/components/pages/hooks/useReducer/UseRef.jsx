import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [isRunning  , setIsRunning] = useState(false)
    const timeoutRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
        timeoutRef.current = setTimeout(() => {
            alert('Timer Finished!')
        }, 3000);
        setIsRunning(false);
    }

    const stopTimer = () => {
        setIsRunning(false);
        clearTimeout(timeoutRef.current);
    }

    // const [count , setCount] = useState(0);
    // const prevCountRef = useRef(null);
    
    // useEffect(() =>{
    //     prevCountRef.current = count;
    // },[count])
    
    // const prevConut = prevCountRef.current;

    // const inputRef = useRef(null);

    // useEffect(() => {
    //     console.log(inputRef.current)
    //     inputRef.current.focus();
    // }, [])

  return (
    <div>
        {/* <input ref={inputRef} className='p-3' type="text" /> */}
        {/* <div className=' p-1 border border-orange-700 text-center w-10 h-30 m-1'>
        <p>{count}</p>
        <p>{prevConut}</p>
        </div>
        <button className='bg-green-800 text-white p-2  m-1' onClick={() => setCount(count + 1)}>Increment</button> */}
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>stop Timer</button>
    </div>
  )
}

export default UseRef