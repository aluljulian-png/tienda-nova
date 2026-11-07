"use client";

import { createContext, useState} from "react";
import { Producto } from "../carrito/components/Carrito";


type CarritoContextType =   {
    carrito: Producto[];
    setCarrito: React.Dispatch<React.SetStateAction<Producto[]>>;
};

export const CarritoContext = createContext<CarritoContextType | null>(null);

export function CarritoProvider ({ children}:  { children: React.ReactNode}){
    const [carrito, setCarrito] = useState<Producto[]>([]);

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito}}>
            {children}
        </CarritoContext.Provider>
    );

}
