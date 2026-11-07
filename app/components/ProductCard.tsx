import React from 'react'
import { Producto } from '../productos/page'

function ProductCard({producto}: {producto:Producto}) {
  return (
        <div key={producto.id} className="border rounded-lg bg-white p-4 text-slate-900 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl hover:-translate-y-2">
        
      
       <div className="relative mb-3">
        <img className="w-full h-48 object-contain rounded-md" 
        src={producto.imagen}
        alt={producto.descripcion}
        />

      {producto.id === 1 && (
        <span className="absolute top-2 left-2 rounded-md bg-red-600 px-3 py-1 text-sm font-bold text-white">
      
      Oferta
      </span>
)} 
      {producto.id === 2 && (
        <span className="absolute top-2 left-2 rounded-md bg-emerald-600 px-3 py-1 text-sm font-bold text-white">
        
      Nuevo
      </span>

        
)}
</div>
 
 <h3>{producto.codigo}</h3>
 <p>{producto.descripcion}</p>
 <p className="font-bold">${producto.precio}</p>
 </div>  )
}

export default ProductCard