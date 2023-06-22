import { Cadeiras } from "./Cadeiras";

export class Sala{
    cadeiras = 30;
    numeroSalas

    constructor(numeroSalas: number){
        this.numeroSalas = numeroSalas
    }

    CadeirasAvainable() {
       let cad = new Cadeiras(this.cadeiras)
        cad.montarCadeira()

    }
}