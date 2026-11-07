'use client'

import { useState } from 'react';
export default function Calculadora( ){
const [numero1, setNumero1] = useState(0);
const [numero2, setNumero2] = useState(0);
const [operacion, setOperacion] = useState <string>("sumar");
const [resultado, setResultado] = useState<number | null>(null);
 
function sumar(a:number, b:number) {
  return a + b;
}

function restar(a:number, b:number) {
  return a - b;
}

function multiplicar(a:number, b:number) {
  return a * b;
}

function dividir(a:number, b:number) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero.");
  }
  return a / b;
}

function potencia(a:number, b:number) {
  return a ** b;
}
function calcular(){
    switch(operacion){
        case "sumar":
            setResultado(sumar(numero1, numero2))
        break 
        case "restar":
            setResultado(restar(numero1,numero2))
        break 
        case "multiplicar":
            setResultado(multiplicar(numero1,numero2))
            break 
        case "dividir":
            setResultado(dividir(numero1,numero2))
            break 
        case "potencia":
            setResultado(potencia(numero1,numero2))
            default:
                break
    }    
    console.log(numero1, numero2, operacion)
}
   return(
    <>
    <section className="mx-auto mt-10 max-w-md">
    <h2 className="mb-4 text-2xl font-bold text-white">
    Calculadora
    </h2>
    
    
    <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-1">
     <label htmlFor="numero1">Primer numero</label>
     <input
     className="w-full rounded-md bg-white p-2 text-slate-900"
     type="number"
     id="numero1"
     value={numero1}
     onChange={(e) => setNumero1(Number(e.target.value))}
        />
    </div>
    
    <div className="flex flex-col gap-1">
        <label htmlFor="numero2">Segundo numero</label>  
        <input
     className="w-full rounded-md bg-white p-2 text-slate-900"
     type="number"
     id="numero2"
     value={numero2}
     onChange={(e) => setNumero2(Number(e.target.value))}
     />
    </div>  
<select className="flex bg-violet-400 text-white mt-1" onChange={(event)=> setOperacion(event.target.value)} name="" id="">
    <option value="sumar">sumar</option> 
    <option value="restar">restar</option>
    <option value="multiplicar">multiplicar</option>
    <option value="dividir">dividir</option>
    <option value="potencia">potencia</option>
    </select>      
</div>
</section>
<div className=" max-w-sm text-center mx-auto w-full bg-slate-800 p-4 rounded-lg mt-4 ">          
<button className="mt-1 rounded-lg bg- px-2 py-2 text-white bg-blue-700 hover:bg-blue-400"onClick={calcular}>calcular resultado</button> 
<p className="text-green-400 mt-4 text-2xl"><strong>{resultado} </strong></p>
</div>
  </>
  )
}
