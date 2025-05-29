import { Producto } from "./Producto.model";

export interface ItemCarrito {
    producto:Producto
    cantidad:number
    subTotal:number
}

export type CarritoMap = Map<number, ItemCarrito>