import React from 'react'
import ProductCard from '../components/ProductCard';

export type Producto = {
  id: number,
  codigo: string,
  descripcion: string,
  precio: number,
  imagen: string
}

function page() {
 const productos: Producto[] = [
  { id: 1, codigo: "producto_1", descripcion: "monitor 27 pulgadas", precio: 350000, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_824464-MLA99937702449_112025-F.webp" },
  { id: 2, codigo: "producto_2", descripcion: "teclado mecánico dragon", precio: 100000, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_875998-CBT110552889865_042026-F.webp" },
  { id: 3, codigo: "producto_3", descripcion: "mouse inalámbrico", precio: 75000, imagen: "https://blitzhandel24.imgbolt.de/media/image/ee/0e/e8/m705-gallery-1.png" },
  { id: 4, codigo: "producto_4", descripcion: "auriculares inalámbricos", precio: 85000, imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80" },
  { id: 5, codigo: "producto_5", descripcion: "parlante Bluetooth", precio: 65000, imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&q=80" },
  { id: 6, codigo: "producto_6", descripcion: "webcam HD", precio: 55000, imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80" },
  { id: 7, codigo: "producto_7", descripcion: "micrófono USB", precio: 90000, imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=300&q=80" },
  { id: 8, codigo: "producto_8", descripcion: "mousepad gamer", precio: 25000, imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=80" },
  { id: 9, codigo: "producto_9", descripcion: "silla gamer", precio: 280000, imagen: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=300&q=80" },
  { id: 10, codigo: "producto_10", descripcion: "soporte para monitor", precio: 45000, imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80" },
  { id: 11, codigo: "producto_11", descripcion: "hub USB de 4 puertos", precio: 30000, imagen: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=300&q=80" },
  { id: 12, codigo: "producto_12", descripcion: "disco SSD 1 TB", precio: 120000, imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80" },
  { id: 13, codigo: "producto_13", descripcion: "memoria USB 64 GB", precio: 18000, imagen: "https://images.unsplash.com/photo-1618410320928-25228d811631?auto=format&fit=crop&w=300&q=80" },
  { id: 14, codigo: "producto_14", descripcion: "cargador USB-C", precio: 35000, imagen: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=300&q=80" },
  { id: 15, codigo: "producto_15", descripcion: "cable HDMI 2 metros", precio: 12000, imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80" },
  { id: 16, codigo: "producto_16", descripcion: "alfombrilla ergonómica", precio: 22000, imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=300&q=80" },
  { id: 17, codigo: "producto_17", descripcion: "base refrigerante para laptop", precio: 40000, imagen: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=300&q=80" },
  { id: 18, codigo: "producto_18", descripcion: "lámpara LED de escritorio", precio: 32000, imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&q=80" },
  { id: 19, codigo: "producto_19", descripcion: "control inalámbrico para PC", precio: 70000, imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=300&q=80" },
  { id: 20, codigo: "producto_20", descripcion: "lector de tarjetas USB", precio: 15000, imagen: "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=300&q=80" },
  { id: 21, codigo: "producto_21", descripcion: "teclado inalámbrico compacto", precio: 50000, imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80" },
  { id: 22, codigo: "producto_22", descripcion: "adaptador USB-C a HDMI", precio: 28000, imagen: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=300&q=80" },
  { id: 23, codigo: "producto_23", descripcion: "cámara de seguridad Wi-Fi", precio: 95000, imagen: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=300&q=80" }
];


 
 return (
         <>
        <h1 className="mb-6 text-center text-3xl font-bold">
          Productos
          </h1>

      
          <div className="grid grid-cols-3 gap-4 px-4">  
        {productos.map((producto) => (
          
<ProductCard producto={producto}/>

        ))}
</div>
</>
      );
    }
export default page
