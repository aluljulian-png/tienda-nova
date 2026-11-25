export type Producto = {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
};

export type ItemCarrito = Producto & {
    cantidad: number;
};