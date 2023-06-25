import { Cadeiras } from "@/types/IChairs"

export class ComprarLugar{
    
    constructor(public lugares:Cadeiras[]) {}

    isAvainable(sell : number) {  
        let lugarSelecionado =  this.lugares[sell]
        
        this.lugares[sell].isOcuped == false ? lugarSelecionado.isOcuped = true : lugarSelecionado.isOcuped = true
        
        return this.lugares
    }

    // comprar(id:number){
    //     const chairIsAvaiable = this.lugares[id]
    //     if(!chairIsAvaiable.isOcuped) return
    //     this.lugares.forEach(element => {
    //         element.isOcuped = false
    //     });
    //     this.lugares[id] =
    // }
    
}