class animalC {
    constructor(tipo){
        this.tipo = tipo
    }
    seuTipo(){
        return this.tipo
    }
}
class cachorroC extends animalC{
    constructor(nome){
        super("mamifero")
        this.nome = nome

    }
}
class pastorAlemao extends cachorroC{
    constructor(nome, idade, cor){
    let valor = 0
    super("Grande")
        this.nome = nome
        this.idade = idade
        this.cor = cor
    }
    definirValor(valorDog){
        return valor = valorDog
        console.log(`O Valor do pastor Alemão é de ${valor}`)
    }
}
const do2 = new pastorAlemao("Rex",4,"Preto")
do2.definirValor(150)
