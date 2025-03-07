import React, { useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { IoSunny } from 'react-icons/io5'


export const Carth = () => {

  const [dark , setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (

    <div className=' bg-white dark:bg-gray-800 flex justify-center gap-10'>
        <div className='bg-pink-600 w-fit
        text-center p-5
        rounded-md
        text-pink-200
         '>Card</div>

         <button onClick={() => darkModeHandler()}>
          {dark && < IoSunny/>}
          {!dark && < IoMoon/>}
         </button>
    </div>
  )
}


