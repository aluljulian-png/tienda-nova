'use client';


import Calculadora from '@/app/prueba2/components/calculadora';
import { useState } from 'react';

export default function ContadorPage() {
   const [contador, setContador] = useState(0);
 
   return (
    <main className="min-h-creen bg slate-950 p-8 text-white">
    <h1 className="text-center text-3xl font-bold text-violet-300 m-2">
    Mi contador    
    </h1>

    <p className="mt-6 text-center text-2x1 text-lg text-green-400">
  Valor Actual: {contador}  

    <div className="mt-6 flex justify-center gap-4">
    <button
        onClick={() => setContador(contador + 1)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
        Aumentar
    </button>

    <button onClick={() => setContador(contador -1 )}
    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Disminuir
    </button>    
</div>
</p>
 
<Calculadora/>    
<Calculadora/>    
<Calculadora/>    


</main>
)    
}

