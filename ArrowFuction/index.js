//Expression function
function soma(n1,n2){
    return n1 + n2
}
console.log("Funçtion express")
console.log(soma(10,20))
console.log("----------------------------")


//Arrow Function
console.log("Arrow Funçtion")
const valor = (n1,n2) => n1 * n2

console.log(valor(2,20))
console.log("----------------------------")

function Pessoa (nome,idade,sexo) {
    this.nome=nome, 
    this.idade=idade,
    this.sexo=sexo
}
const p1 = new Pessoa("Alexandre", 31,"Masc")
const p2 = new Pessoa("Mariana", 23,"Fem")
const p3 = new Pessoa("Cecilia", 2,"Fem")

console.log("Arrow Funçtion retornando Objeto json")
console.log(p1)
console.log(p2)
console.log(p3)
console.log("----------------------------")

//Arrow function usando apenas um parametro
const abc = number => number *3 
console.log("Arrow Funçtion one paramter")
console.log(abc(500))
console.log("----------------------------")

//Arrow function alto executavel

;(() => {
    const pessoa = () => ({idade: 22, nome: "Alexandre" })
    console.log(pessoa())

})()
