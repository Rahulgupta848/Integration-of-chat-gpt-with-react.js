import React from 'react'
import { Button, Input } from "@material-tailwind/react";

const CustomInput = ({search,setSearch,loading,handleSearch}) => {
  return (
     <div className=" flex justify-center">
        <div className="relative flex w-[80%] mt-5 min-w-[700px]">
          <Input
            color="white"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="pr-20 h-[55px] bg-black text-[18px]"
          />
          <Button
            size="sm"
            color={"blue-gray"}
            loading={loading}
            className="!absolute right-1 top-1 rounded h-[45px]"
            onClick={()=>handleSearch()}
          >
            Searh
          </Button>
        </div>
      </div>
  )
}

export default CustomInput