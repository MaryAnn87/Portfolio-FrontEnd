export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    tituloProfesion: string;

    constructor(nombre: string,apellido: string, descripcion: string, img: string, tituloProfesion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.tituloProfesion = tituloProfesion;
    }
}
