import { Producto } from "./Carrito";
type Props = {
  producto: Producto;
  onCerrar: () => void;
  onAgregar: () => void;
};

function Modal({producto, onCerrar, onAgregar}: Props) {
    
    return (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            
<div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

<h2 className="text-gray-800"> Detalle del producto</h2>

<p className="text-gray-600">¿Queres agregar {producto.nombre} al carrito? Su precio es ${producto.precio}</p>

<button onClick={onCerrar}
className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
>
Cerrar
</button>

<button onClick={onAgregar}
 className="whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
Agregar al Carrito
</button>
</div>
    </div>
    );
}

export default Modal;