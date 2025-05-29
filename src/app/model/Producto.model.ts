export class Producto{
    constructor(
        public id:number,
        public descripcion:string,
        public imagen:string,
        public categoria:string,
        public cantidad:number,
        public precio:number
    ){}
}