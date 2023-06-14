import { Abstract } from "./abstract"
import { Cor } from "./cor";
import { Modelo } from "./modelo";
import { Tipo } from "./tipo";

export class Veiculo extends Abstract {
    
    placa! : string
    cor! : Cor
    modelo! : Modelo
    tipo! : Tipo
    ano! : number

    constructor() {
        super()
        this.ativo = true;
    }

}