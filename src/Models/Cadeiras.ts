import { ComprarLugar } from "./ComprarLugar"
import {Cadeiras as Cad} from '../types/IChairs'



export class Cadeiras {
    cadeirasT: Cad[] = []
    
    constructor(readonly numberChair:number) {}

    montarCadeira() {
        for(let i = 0; i < this.numberChair; i++) {
            this.cadeirasT.push({id: i, isOcuped: false})
        }        
        return(this.cadeirasT)       
    }
     
}
