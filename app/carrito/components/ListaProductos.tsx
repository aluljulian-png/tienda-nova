import { Producto} from "./Carrito";
import ItemProducto from "./ItemProducto"
import { useState, useEffect } from "react";
import Modal from "./Modal";
type Props = {
    productos: Producto[];
    mostrarNotificacion: (mensaje: string) => void;
    agregarProducto: (producto: Producto) => void;
    aumentarCantidad: (producto: Producto) => void;
    eliminarProducto: (producto: Producto) => void;
};

function ListaProductos(props: Props) {
 const [isOpen, setIsOpen] = useState(false);


const [productoSeleccionado, setProductoSeleccionado] = 
    useState<Producto | null>(null); 
 
const verDetalle = (producto: Producto) => {    
    setProductoSeleccionado(producto);
    setIsOpen(true);
}

useEffect(() => {

    if (!isOpen) return;

    const manejarTecla = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsOpen(false); 
        }
    };
    window.addEventListener("keydown", manejarTecla);
    
    return () =>{    
    window.removeEventListener("keydown", manejarTecla);
}; 

}, [isOpen]);

useEffect(() => {

    if (!isOpen) return;
const scrollAnterior = document.body.style.overflow

document.body.style.overflow = "hidden";

return () => {
    document.body.style.overflow = scrollAnterior;
};

}, [isOpen]);



    return (
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
       
        {props.productos.map((producto, index) => (
        <ItemProducto   producto={producto}
                        onVerDetalle={() => verDetalle(producto)} 
                        onAumentar={() => props.aumentarCantidad(producto)}
                        key={producto.id}
                        onEliminar={() => props.eliminarProducto(producto)}  />
                        
                    ))}
                    {isOpen && productoSeleccionado && (
                        <Modal
                        
                        producto={productoSeleccionado}
                        onCerrar={() => setIsOpen(false)}
                        onAgregar={() => {
            props.agregarProducto(productoSeleccionado);
             props.mostrarNotificacion("¡Producto agregado al carrito!");
            setIsOpen(false);
        }}
        />
    )}    
</div>
  );
}


export default ListaProductos