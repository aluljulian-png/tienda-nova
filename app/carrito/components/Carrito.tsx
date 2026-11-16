    "use client"
    import EncabezadoCarrito from "./EncabezadoCarrito";
    import ListaProductos from "./ListaProductos";
    import ResumenCarrito from "./ResumenCarrito";
    import CarritoVacio from "./CarritoVacio";
    import { useState, useEffect, useRef } from "react"
    import type { Producto } from "@/app/types/producto";    
    import { useContext } from "react";
    import { CarritoContext } from "@/app/context/CarritoContext";

export default function Carrito()  {

const [carritoAbierto, setCarritoAbierto] = useState(true);

const [notificacion, setNotificacion] = useState ("");

const [cargandoCarrito, setCargandoCarrito] = useState(true);

const temporizadorRef = useRef<ReturnType<typeof setTimeout> | null>(null);

const contexto = useContext(CarritoContext);

const {
    carrito,
    setCarrito,
    agregarProducto,
    quitarProducto,
    aumentarCantidad,
    reducirCantidad
} = contexto;

const cantidadTotal = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.cantidad;
}, 0);

const totalPagar = carrito.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.cantidad);
}, 0);
        
const mostrarNotificacion = (mensaje: string) => {
    
    setNotificacion(mensaje);

if (temporizadorRef.current){
    clearTimeout(temporizadorRef.current);
}

temporizadorRef.current = setTimeout(() => {
    setNotificacion("");
}, 3000);

}



const eliminarProducto = (producto: Producto) => {
    quitarProducto(producto.id);
   
};

useEffect(() => {
    
    const datosGuardados = localStorage.getItem("carrito");

    if (datosGuardados) {
        const productosGuardados: Producto[] = JSON.parse(datosGuardados);
        setCarrito(productosGuardados);
    }
    setCargandoCarrito(false);
}, [carrito]);

useEffect(() => {

    const manejarAtajo = (event: KeyboardEvent) => {

        const elemento = event.target;

        if (!(elemento instanceof HTMLElement)) return;

        if (
            elemento.tagName === "INPUT" ||
            elemento.tagName === "TEXTAREA"
        ) {
            return;
        }

        if (event.key.toLowerCase() === "c") {
            setCarritoAbierto((prev) => !prev);
        }
    };

    window.addEventListener("keydown", manejarAtajo);

    return () => {
        window.removeEventListener("keydown", manejarAtajo);
    };

}, []);


useEffect(() => {

    return () => {
        if (temporizadorRef.current) {
            clearTimeout(temporizadorRef.current);
        }
    };

}, []);

useEffect(() => {

    if (cargandoCarrito) return;

    localStorage.setItem("carrito", JSON.stringify(carrito));

},  [carrito, cargandoCarrito]);

    return (
        <main className="mx-auto max-w-4xl p-6">


    <h1 className="mb-6 text-3xl font-bold">Mi Carrito</h1>
    {notificacion && (
    <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-800">
        {notificacion}
    </div>
)}
    <input
    type="text"
    placeholder="Escribí algo para probar..."
    className="mb-4 rounded-lg border p-2"
/>
    <button className="rounded-lg bg-red-600 text-white hover:bg-red-700" onClick ={() => setCarrito([])}>
            Vaciar Carrito
        </button>
        
        {carritoAbierto && (
<> 
        
    <EncabezadoCarrito/>

        {carrito.length === 0 ? (
            <CarritoVacio />    
        ) : (
            <>
            <ListaProductos productos={carrito} 
            mostrarNotificacion={mostrarNotificacion} 
            agregarProducto={agregarProducto}
            aumentarCantidad={aumentarCantidad}
            eliminarProducto={eliminarProducto}
            reducirCantidad={reducirCantidad}
              />
            <ResumenCarrito
                cantidadTotal={cantidadTotal}
                totalPagar={totalPagar}
                
             />
        </> 
        )}
    </>
    )}

</main>
);
}