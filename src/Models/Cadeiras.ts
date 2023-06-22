type cadeiras ={
    array: {
        id: number,
        isOcuped: boolean
    }
}

export class Cadeiras {
    array = [];
    id;
    on = false
    cadeiras:any
    constructor(id:number) {
        this.id = id
    }
    criarCadeira() {
        this.cadeiras =  new CriarCadeiras(this.id, this.on)
    }
    opa() {
        console.log(this.cadeiras)
    }
}

export class CriarCadeiras {
    id
    on
    constructor(id:number, on:boolean) {
        this.id = id
        this.on = on
    }
    montar() {
        return ({ide: this.id, livre: this.on})
    }
}