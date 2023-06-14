import { Abstract } from "./abstract"
import { Marca } from "./marca";


export class Modelo extends Abstract {
    
    nome! : string
    marca! : Marca

    constructor() {
        super()
        this.ativo = true;
    }

}