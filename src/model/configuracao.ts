import { Abstract } from "./abstract"


export class Configuracao extends Abstract {
    
    valorHora! : number
    valorMinutoMulta! : number
    inicioExpediente! : Date
    fimExpediente! : Date
    tempoParaDesconto! : number
    tempoDesconto! : number
    gerarDesconto! : boolean
    vagasMoto! : number
    vagasCarro! : number
    vagasVan! : number

    constructor() {
        super()
        this.ativo = true;
    }

}