import React from 'react'
import { FaFire } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaCamera } from "react-icons/fa";
function StreakCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <div className='flex justify-center items-center flex-col'>
   <h2 className="card-title"><FaFire className='text-primary text-center text-8xl'/></h2>
    <p className='my-5 text-5xl font-bold'>10</p>
   </div>

   <div className='my-10 flex justify-evenly items-center'>

    <div>
        <TiTick className='text-4xl rounded-full text-[#171212] bg-[#1eb854]'/>
    </div>

    <div>
        <TiTick className='text-4xl rounded-full text-[#171212] bg-[#1eb854]'/>
    </div>


    <div>
        <TiTick className='text-4xl rounded-full text-[#171212] bg-[#1eb854]'/>
    </div>


    <div>
        <TiTick className='text-4xl rounded-full text-[#171212] bg-[#1eb854]'/>
    </div>


   </div>
    <div className="card-actions justify-end">
    <button className="btn">
  <FaCamera/>
  Screenshot
</button>
      <button className="btn btn-primary">Analytics</button>
    </div>
  </div>
</div>
  )
}

export default StreakCard