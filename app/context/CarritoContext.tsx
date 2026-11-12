"use client";
import { createContext, useState} from "react";
import { Producto } from "../types/producto";


type CarritoContextType =   {
    carrito: Producto[];
    setCarrito: React.Dispatch<React.SetStateAction<Producto[]>>;
};

export const CarritoContext = createContext<CarritoContextType | null>(null);

export function CarritoProvider ({ children}:  { children: React.ReactNode}){
    const [carrito, setCarrito] = useState<Producto[]>([]);

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

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito}}>
            {children}
        </CarritoContext.Provider>
    );

}
    