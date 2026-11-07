"use client";

import { useState } from "react";

function Caja() {
  const [contador,setContador]=useState<number>(0)
    function aumentar(): void{
    setContador(contador+1)    
    console.log(contador)
    }  
  return (
    <div onClick={aumentar} className="flex border bg-blue-700 sticky top-0 h-40 w-40">
        <p  className="m-auto">{contador}</p>
    </div>
  )
}

export default Caja