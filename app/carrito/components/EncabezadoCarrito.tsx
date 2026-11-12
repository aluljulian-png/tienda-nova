"use client"
import { useContext } from "react";
import { CarritoContext } from "@/app/context/CarritoContext";

export default function EncabezadoCarrito() {
   
   const contexto = useContext(CarritoContext);
   const cantidad = contexto?.carrito.length ?? 0;

    return (
        <header>
       
        <p>Productos en el carrito: {cantidad}</p>
        </header>
    );
}
