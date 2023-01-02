export class Experiencia {
    id? : number;
    nombreE : string;
    tituloPuesto : string;
    periodo: string;
    descripcionE : string;

    constructor({ nombreE, tituloPuesto, periodo, descripcionE }: { nombreE: string; tituloPuesto: string; periodo: string; descripcionE: string; }){
        this.nombreE = nombreE;
        this.tituloPuesto =tituloPuesto;
        this.periodo = periodo;
        this.descripcionE = descripcionE;
    }
}
