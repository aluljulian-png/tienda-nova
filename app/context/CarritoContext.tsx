"use client";
import { createContext, useState} from "react";
import type { Producto, ItemCarrito } from "../types/producto";


type CarritoContextType =   {
    carrito: ItemCarrito[];
    cantidadTotal: number;
    totalPagar: number;
    cargarCarrito: (productos: ItemCarrito[]) => void;
    vaciarCarrito: () => void;
    quitarProducto: (id: number) => void;
    aumentarCantidad: (id: number) => void;
    agregarProducto: (producto: Producto) => void;
    reducirCantidad: (id: number) => void;
};

export const CarritoContext = createContext<CarritoContextType  >({carrito: [],cantidadTotal: 0,totalPagar: 0,cargarCarrito: (productos) => {},vaciarCarrito: () => {}, quitarProducto: (id) => {}, aumentarCantidad: (id) => {}, agregarProducto: (producto) =>{}, reducirCantidad: (id) => {}});

export function CarritoProvider ({ children}:  { children: React.ReactNode}){
    const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

const cantidadTotal = carrito.reduce ((acumulador, producto) => {
    return acumulador + producto.cantidad;
}, 0 )

const totalPagar = carrito.reduce ((acumulador, producto) => {
    return  acumulador + (producto.precio * producto.cantidad)
},0)
    const agregarProducto = (producto: Producto) => {
    setCarrito((prev) => {
    const existe = prev.find((item) => item.id === producto.id);
        
    if (existe) {   
        return prev.map((item) => {
            if (item.id === producto.id) {
            return { 
                ...item,
                cantidad: item.cantidad + 1
            };
        }
        return item;    
    });
}
return [...prev, { ...producto, cantidad:1}];

});
};

const quitarProducto = (id: number) => {
    setCarrito ((prev) =>
        prev.filter((item) => item.id !== id)
);
};
const aumentarCantidad = (id: number) => {
    setCarrito ((prev)  =>
        prev.map((item) => 
            item.id === id 
            ?{ ...item, cantidad: item.cantidad + 1 } 
            : item
        )
    );
    };

    const reducirCantidad = (id: number) => {
        setCarrito ((prev)  => {
            const producto = prev.find((item) => item.id === id);

        if (!producto) return prev;

        if (producto.cantidad === 1 ) {
            return prev.filter((item) => item.id !== id);
        }
        
        return prev.map((item) =>
            item.id === id
            ? { ...item, cantidad: item.cantidad -1 }
            : item
        );
    });
};

const vaciarCarrito = () => {
    setCarrito([]);
};
const cargarCarrito = (productos: ItemCarrito[]) => {
    setCarrito(productos);
}
    return (
        <CarritoContext.Provider value={{ carrito, cantidadTotal,vaciarCarrito, totalPagar, cargarCarrito, agregarProducto, quitarProducto, aumentarCantidad,reducirCantidad}}>
            {children}
        </CarritoContext.Provider>
    );

}
    