import { Abstract } from "./abstract"

export class Condutor extends Abstract {
    
    nome! : string
    cpf! : string
    telefone! : string 
    tempo! : number


    constructor() {
        super()
        this.ativo = true;
    }

}