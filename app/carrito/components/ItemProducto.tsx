import { Producto } from "./Carrito";


export default function ItemProducto({
  producto,
  onVerDetalle,
  onAumentar,
  onEliminar
}: {
  producto: Producto;
  onVerDetalle: () => void;
  onAumentar: () => void;
  onEliminar: () => void;
}) {
    return (

    <div className="rounded-2xl border border-gray-200 text-gray-800 relative bg-blue-600 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
    <button className="bg-amber-600 border-4 border-white absolute p-2 right-4 bottom-4 " onClick={onVerDetalle}>
            Ver Detalle
</button>    
    
    <button
    className=" bg-green-600 text-white rounded-lg p-2 mt-3 "
    onClick={onAumentar}
>
    Aumentar cantidad
</button>
<button className="bg-red-600 text-white rounded-lg p-2 mt-3 ml-2"
onClick={onEliminar}
>
        Eliminar
</button>   
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: {producto.cantidad}</p>
    </div>

    )

    
}