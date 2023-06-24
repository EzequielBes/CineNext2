import { Cadeiras } from "./Cadeiras";

export class Sala{
    cadeiras = 30;
    numeroSalas
    metodo = new Cadeiras(this.cadeiras)

    constructor(numeroSalas: number){
        this.numeroSalas = numeroSalas
    }

    CadeirasAvainable() {
       
        //this.metodo.montarCadeira()
        return this.metodo.montarCadeira()

    }
    CadeirasNovas(num:number) {
        this.metodo.comprarLugar(num)
        console.log(num)
    }
}