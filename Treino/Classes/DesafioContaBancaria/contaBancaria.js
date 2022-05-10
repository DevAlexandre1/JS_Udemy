class ContaBancaria{
    constructor(cliente,numero,saldo){
        if(this.constructor === ContaBancaria){
            throw new error ("ContaBancaria is a abstract class")
        }if(cliente, numero){
            this.cliente = cliente
            this.numero = numero
            this.saldo = 0
        }      
    }
    get obterDadosCliente(){
        console.log(this.cliente.constructor)
        return `Nome do cliente ${this.cliente.nome} e seu documento é ${this.cliente.documento}`
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

class Cliente {
    constructor(nome,documento){
        if(this.constructor === Cliente){
            throw new Error("Classe abstract")
        }
        this.nome = nome
        this.documento = documento
    }
}

class ClientePF extends Cliente{
    constructor(nome,documento){
        super(nome,documento)
        this.CPF = documento
        
    }
}
class ClientePJ extends Cliente{
    constructor(nome,documento){
        super(nome,documento)
        this.CNPJ = documento 
        
    }
}

const cc1 = new ContaCorrente("Alexandre",1)
cc1.limite = 3000
cc1.depositar(1000)
cc1.sacar(3500)
console.log(cc1)

const cp1 = new ContaPoupanca("Mariana", 2)
cp1.depositar(4000)
cp1.sacar(2000)
console.log(cp1)

const client1 = new ClientePF("Carlos","109.343.234.22")
const client2 = new ClientePJ("Carlos","10.098.876.0001-10")

console.log(client1)
console.log(client2)

console.log(client1.obterDadosCliente)