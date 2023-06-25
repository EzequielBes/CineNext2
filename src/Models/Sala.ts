import { Cadeiras } from "./Cadeiras";

export class Sala{
    cadeiras = 30;
    numeroSalas
    metodo = new Cadeiras(this.cadeiras)

    constructor(numeroSalas: number){
        this.numeroSalas = numeroSalas
    }

    CadeirasAvainable() {
        return this.metodo.montarCadeira()

    }
    
}