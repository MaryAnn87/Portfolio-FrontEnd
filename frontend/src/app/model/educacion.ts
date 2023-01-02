export class Educacion {
    id?: number;
    nombreInstitucion: string;
    tituloEd: string;
    periodo: string;
    descripcionEd: string;

    constructor( nombreInstitucion: string, tituloEd:string, periodo:string, descripcionEd:string){
        this.nombreInstitucion = nombreInstitucion;
        this.tituloEd = tituloEd;
        this.periodo = periodo;
        this.descripcionEd = descripcionEd;
    }


}
