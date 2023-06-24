import { ComprarLugar } from "./ComprarLugar"
import {Cadeiras as Cad} from '../types/cadeiras'



export class Cadeiras {
    id
    cadeirasT: Cad[] = []
    
    constructor(cadeiras:number) {
        this.id = cadeiras
    }
    montarCadeira() {
        for(let i = 0; i < this.id; i++) {
            this.cadeirasT.push({id: i, isOcuped: false})
        }
        
        return(this.cadeirasT)
        
    }
    
   
}
