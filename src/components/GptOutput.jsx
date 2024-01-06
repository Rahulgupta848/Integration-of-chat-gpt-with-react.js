import { Spinner } from '@material-tailwind/react'
import React from 'react'

const GptOutput = ({loading, gptOutput, setGptOutput,}) => {
     return (
          <div className="flex justify-center mt-10">
               <div className="w-[90%] h-[500px] bg-[#434040] border rounded-xl p-5  text-[white]">
                    <div className="flex justify-between">
                         <div className="text-[20px] underline">Chat-gpt output..</div>
                         <div onClick={()=>setGptOutput('')} className="bg-white py-1 px-2 text-[14px] text-black rounded-lg cursor-pointer">Clear</div>
                    </div>
                    {
                         loading ?
                              <div className="w-[100%] h-[100%] flex justify-center items-center">
                                   <Spinner className="h-16 w-16 text-white" />
                              </div> :
                              <div className="text-[#b3b0b0] mt-2">
                                   {gptOutput}
                              </div>
                    }
               </div>
          </div>
     )
}

export default GptOutput