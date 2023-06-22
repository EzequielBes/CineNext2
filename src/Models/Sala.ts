import { Cadeiras } from "./Cadeiras";

export class Sala{
    cadeiras = 30;
    numeroSalas

    constructor(numeroSalas: number){
        this.numeroSalas = numeroSalas
    }

    CadeirasAvainable() {
        for(let i = 0; i < this.cadeiras; i++) {
            let cade = new Cadeiras(i)
            cade.criarCadeira()
            cade.opa()
        }
    }
}