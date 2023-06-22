type cadeiras ={
    array: {
        id: number,
        isOcuped: boolean
    }
}

export class Cadeiras {
    id
    cadeirasT: cadeiras[] = []
    constructor(cadeiras:number) {
        this.id = cadeiras
    }
    montarCadeira() {
        for(let i = 0; i < this.id; i++) {
            this.cadeirasT.push({id: i, osOcuped: false})
        }
        console.log(this.cadeirasT)
    }
   
}
