class Transferencia{
    static execute(contaOrigem,contaDestino,valor){
        if(!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria){
            throw new Error("Contas precisam herdar de ContaBancaria")
        }
        try{
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
        }catch(e){
            console.log("Sem saldo.", e.message)
        }
    }
}


class Cliente {
    constructor(nome,documento, tipo){
        if(this.constructor === Cliente){
            throw new Error("Classe abstract")
        }
        this.nome = nome
        this.documento = documento
        this.tipo = tipo
    }
}

class ClientePF extends Cliente{
    constructor(nome,documento){
        super(nome,documento,"CPF")
        this.CPF = documento
        
    }
}
class ClientePJ extends Cliente{
    constructor(nome,documento){
        super(nome,documento,"CNPJ")
        this.CNPJ = documento 
        
    }
}

class ContaBancaria{
    constructor(cliente,numero){
        if(this.constructor === ContaBancaria){
            throw new error ("ContaBancaria is a abstract class")
        }if(cliente, numero){
            this.cliente = cliente
            this.numero = numero
            this.saldo = 0
        }      
    }
    get obterDadosCliente(){

        return `Cliente: ${this.cliente.nome} e ${this.cliente.tipo}: ${this.cliente.documento}`
    }
    depositar(valor){
        this.saldo += valor    
    }
    sacar(){
        throw new Error ("Sacar precisa ser implementado")
    }
} 


class ContaCorrente extends ContaBancaria{
    constructor(cliente,numero){
        super(cliente, numero)
        this.limite = 0
    }
    sacar(valor){
        let saldoDisponivel = this.saldo + this.limite
        if(valor > saldoDisponivel){
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor

    }
}
class ContaPoupanca extends ContaBancaria{
    constructor(cliente,numero){
        super(cliente,numero)
        this.aniversario = Date.now()
    }
    sacar(valor){
        if(valor > this.saldo){
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

const alexandre = new ClientePF("Alexandre", "345.903.567.10")
const alexandreDev = new ClientePJ("DevAlexandre","15667456000109")

const cc1 = new ContaCorrente(alexandreDev,1)
const cp1 = new ContaPoupanca(alexandre,2)
console.log(cc1)
console.log(cp1)

console.log(cc1.obterDadosCliente)
console.log(cp1.obterDadosCliente)


