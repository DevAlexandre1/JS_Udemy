//Criar um método construtor com parametros obrigatorios e um não. 
//Criar uma função para validar se esta aprovado ou não

function Pessoa(nome,cpf,idade,nota){
    this.nome = nome,
    this.cpf = cpf,
    this.idade =  idade || null,
    this.nota = nota,
    this.aprovado = false
    this.aprovat = function(atualizaAprovado){
        if (nota > 6) this.aprovado = true      
    }
}
const pessoa1 = new Pessoa("Alexandre", 10490273610, null,9)
pessoa1.aprovat(this.nota)
//console.log(pessoa1)

//###################################################//

//Criar um metodo construtor com uma variável encapsulada

function Carro(velocidade, cor, ano){
    let _modelo = ""
    this.modelo = _modelo
    this.velocidade = velocidade
    this.cor = cor
    this.ano = ano
    this.setModelo = function(novoModelo){
        this.modelo = novoModelo
    }
}
//const carro1 = new Carro(165,"Preto",1991)
//carro1.setModelo("Palio")
//console.log(carro1)
//##############################################################
//Criar um array de objetos

let carro={
    modelo: "",
    ano: "",
    atualizarCarro(modelo,ano){
        modelo = modelo
        ano=ano
    }
}


/*
const carro1 = new carro("uno",1990 )
const carro2 = new carro("palio",1999 )
const carro3 = new carro("Gol",2010 )
console.log(carro[0])
console.log(carro[1])
console.log(carro[2])
*/

//##############################################################

// Exercicio retornar o numero com seu dados restritos - AULA 169
//retornar:9****-**69
let tel1 = "99777-1234"

function mask(numero){
    let posiHifem = numero.indexOf("-")
    let primeiroNumeros = numero.slice(0,posiHifem)
    let ultimosNumeros = numero.slice(posiHifem +1)
    let doisultimosnumeros = ultimosNumeros.slice(ultimosNumeros.length -2)
    let primeiroNumeros1 = primeiroNumeros[0].padEnd(primeiroNumeros.length,"*")
    let ultimosNumeros1 = doisultimosnumeros.padStart(ultimosNumeros.length,"*")
    //console.log(`${primeiroNumeros1}-${ultimosNumeros1}`)        
}
mask(tel1)