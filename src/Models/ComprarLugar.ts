import { Cadeiras } from "@/types/cadeiras"

export class ComprarLugar{
    
    constructor(public lugares:Cadeiras[]) {}

     isAvainable(sell : number) {  
        let lugarSelecionado =  this.lugares[sell]
        this.lugares[sell].isOcuped == false ? lugarSelecionado.isOcuped = true : lugarSelecionado.isOcuped = true
        return this.lugares
    }
    
}