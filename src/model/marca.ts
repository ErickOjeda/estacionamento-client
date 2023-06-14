import { Abstract } from "./abstract";


export class Marca extends Abstract {
    nome! : string


    constructor() {
        super()
        this.ativo = true
    }
}