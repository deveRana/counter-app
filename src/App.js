import React from 'react'
import "./App.css"

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import { BiReset } from "react-icons/bi"
import { useState } from 'react'

const App = () => {

  const [customValue, setCustomValue] = useState(5)
  const [counter, setCounter] = useState(customValue)

  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-[#000300] px-4 py-12  ' >


        <h3 className='text-3xl text-white text-center' >
          Welcome to <span className='font-bold text-[#00df9a]' >Counter App</span>
        </h3>


        <div className='w-[100] flex flex-row items-center justify-center my-10 ' >

          <AiFillMinusCircle onClick={() => { setCounter(counter - parseInt(customValue) ) }} className='text-[#fff] text-4xl hover:text-[#00df9a] cursor-pointer duration-500 ' />
          <span className={` ${counter > -1 ? 'text-[#fff]' : 'text-[#DF2E38]' }  text-8xl mx-8 `}>
            {counter}
          </span>
          <AiFillPlusCircle onClick={() => { setCounter(counter + parseInt(customValue) ) }} className='text-[#fff] text-4xl hover:text-[#00df9a] cursor-pointer duration-500 ' />

        </div>

        <div className='w-[100] flex flex-row items-center justify-center my-10 '  >
          <BiReset onClick={()=>{setCounter(0)}} className='text-[#fff] text-6xl hover:text-[#00df9a] cursor-pointer duration-500 mr-5 ' />
          <input type='text' value={customValue} onChange={(e) => { setCustomValue(e.target.value) }} className=' w-[100px] text-center custom value text-xl px-4 py-4 border-none outline-none bg-[#00df9a] text-white rounded-lg ' />
        </div>


      </div>
    </>
  )
}

export default App