"use client";
import React, { useEffect, useState } from 'react'

function page()  {
    const [colorFondo, setColorFondo] = useState<string>("bg-blue-500")
    useEffect( () =>{
        console.log("el color a cambiado")
        const cambiarColor = setTimeout( () => {
        console.log("devolvemos el color azul")
        setColorFondo("bg-blue-500")
        },2000)

        return () => clearTimeout(cambiarColor)
    } , [colorFondo])
    return (
    <div className="relative w-full h-96 bg-amber-900 flex justify-center items-center">

    <div className={`${colorFondo} aspect-square w-40 border-4`} >
    
    </div>
    <button onClick={() => setColorFondo("bg-red-500")} className='p-8 absolute border-2 bg-black top-full'>cambiar a rojo</button> 
    
    </div>
  )
}

export default page