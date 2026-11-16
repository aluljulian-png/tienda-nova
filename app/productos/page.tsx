import ProductCard from '../components/ProductCard';
import { mockListaProductos } from '../data/data';
import { Producto } from '../types/producto';


function page() {
 const productos: Producto[] = mockListaProductos


 return (
         <>
        <h1 className="mb-6 text-center text-3xl font-bold">
          Productos
          </h1>

      
          <div className="grid grid-cols-3 gap-4 px-4">  
        {productos.map((producto,index) => (
          
<ProductCard producto={producto} key={index}/>

        ))}
</div>
</>
      );
    }
export default page
