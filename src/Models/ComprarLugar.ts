import { Cadeiras } from "@/types/cadeiras"

export class ComprarLugar{
    lugares
    constructor(lugares:Cadeiras[]) {
        this.lugares = lugares
    }

    isAvainable(sell : number) {
        let lugarSelecionado = this.lugares[sell]
        lugarSelecionado.isOcuped == false ? lugarSelecionado.isOcuped = true : lugarSelecionado.isOcuped = false  
        
    }
    

}