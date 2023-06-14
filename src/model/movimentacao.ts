import { Abstract } from "./abstract"
import { Condutor } from "./condutor"
import { Veiculo } from "./veiculo"

export class Movimentacao extends Abstract {
    
    veiculo! : Veiculo
    condutor! : Condutor
    entrada! : Date
    saida! : Date
    tempoHoras! : number
    tempoMinutos! : number
    tempoDesconto! : Date
    tempoMulta! : Date
    valorTotal! : number
    valorDesconto! : number
    valorMulta! : number
    valorHora! : number
    valorMinutoMulta! : number

    constructor() {
        super()
        this.ativo = true;
    }

}