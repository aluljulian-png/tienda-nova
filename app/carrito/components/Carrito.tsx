    "use client"
    import EncabezadoCarrito from "./EncabezadoCarrito";
    import ListaProductos from "./ListaProductos";
    import ResumenCarrito from "./ResumenCarrito";
    import CarritoVacio from "./CarritoVacio";
    import { useState, useEffect, useRef } from "react"
    import { mockListaProductos } from "@/app/data/data";

export type Producto ={id:number; nombre:string;   precio:number;   cantidad:number;  };

export default function Carrito()   {

const [listaProductos, setListaProductos] = useState<Producto[]>(mockListaProductos);

const [carritoAbierto, setCarritoAbierto] = useState(true);

const [notificacion, setNotificacion] = useState ("");

const [cargandoCarrito, setCargandoCarrito] = useState(true);

const temporizadorRef = useRef<ReturnType<typeof setTimeout> | null>(null);

const cantidadTotal = listaProductos.reduce((acumulador, producto) => {
        return acumulador + producto.cantidad;
    }, 0)

const totalPagar = listaProductos.reduce((acumulador, producto) => {
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

const agregarProducto = (producto: Producto) => {
  setListaProductos((prev) => {
    const existe = prev.find(
      (item) => item.id === producto.id
    );

    if (existe) {
      return prev.map((item) =>
        item.nombre === producto.nombre
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    }

    return [...prev, { ...producto, cantidad: 1 }];
  });
};

const aumentarCantidad = (producto: Producto) => {
  setListaProductos((prev) =>
    prev.map((item) =>
      item.id === producto.id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    )
  );
};

const eliminarProducto = (producto: Producto) => {
    setListaProductos((prev) =>
    prev.filter((item) =>   item.id !== producto.id)
    );
};

useEffect(() => {
    const datosGuardados = localStorage.getItem("carrito");


    if (datosGuardados) {
        const productosGuardados: Producto[] = JSON.parse(datosGuardados);
        setListaProductos(productosGuardados);
    }
    setCargandoCarrito(false);
}, []);

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

    localStorage.setItem("carrito", JSON.stringify(listaProductos));

},  [listaProductos, cargandoCarrito]);

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
    <button className="rounded-lg bg-red-600 text-white hover:bg-red-700" onClick ={() => setListaProductos([])}>
            Vaciar Carrito
        </button>
        
        {carritoAbierto && (
<> 
        
    <EncabezadoCarrito cantidadTotal={cantidadTotal} />

        {listaProductos.length === 0 ? (
            <CarritoVacio />    
        ) : (
            <>
            <ListaProductos productos={listaProductos} 
            mostrarNotificacion={mostrarNotificacion} 
            agregarProducto={agregarProducto}
            aumentarCantidad={aumentarCantidad}
            eliminarProducto={eliminarProducto}
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