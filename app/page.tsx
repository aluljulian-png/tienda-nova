import React from 'react'


export default function Home() {
  return (
    <div>

    <h1 className='text-center'>Tienda Nova</h1>

    <p className="text-5xl text-center">bienvenido a la Tienda Nova</p>

    <h2 className="text-center">Productos Destacados</h2>
  
  
    <div className="grid grid-cols-3 gap-4 ">
      
    
    <div className="bg-white p-4 rounded-lg shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
    <h3>Producto 1</h3>
    <p>nombre: Monitor 24 pulgadas</p>
    <p>precio: $20.00</p>
    <img className="w-1/2 h-48 object-cover mx-auto" src="https://www.lg.com/ar/images/monitores/md05985257/gallery/medium01.jpg" alt="Monitor 24 pulgadas" />
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
    <h3>Producto 2</h3>
    <p>nombre: mouse inalámbrico</p>
    <p>precio: $15.000</p>
    <img className="w-1/2 h-48 object-cover mx-auto" src="https://www.mink.com.ar/qloud/ryr/fotos/26506-0.jpg" alt="mouse inalámbrico dragon" />
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">  
    <h3>Producto 3</h3>
    <p>nombre: teclado mecánico</p>
    <p>precio: $18.000</p>
    <img className="w-1/2 h-48 object-cover mx-auto " src="https://aremsaprod.vtexassets.com/arquivos/ids/678012-1200-auto?v=638640613034300000&width=1200&height=auto&aspect=true" alt="teclado mecánico" />
    </div>
    </div>





    </div>

   




  )
}
