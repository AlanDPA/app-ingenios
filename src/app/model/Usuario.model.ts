export class Usuario{
    constructor(
        public id:number,
        public nombre:string,
        public apellido:string,
        public dni:string,
        public numero_contacto:string,
        public direccion:string,
        public correo_electronico:string,
        public foto_perfil:string
    ){}
}