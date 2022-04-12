
const inpDados = document.getElementById("inpTxt")
const resSoma = document.getElementById("resSoma")
const resMedia = document.getElementById("resMedia")
      
let dados = inpDados.value
let soma = sum(dados)
let media = avarege(dados)


/*
function sum(){
    const numbers = [...arguments]
    return numbers.reduce(function(sum,atual){
        return sum + atual
    },0)

}

function avarege(){
    return sum(...arguments) / arguments.length
}

let soma = sum(10,20,30)
let media = avarege(40,50,60)
console.log(soma)
console.log(media)

*/
function sum(){
    const numbers = [...arguments]
    return numbers.reduce(function(sum,atual){
        return resMedia.innerHTML = `A soma dos valores são: ${(sum + atual)}`
        
    },0)

}

function avarege(){
    return resMedia.innerHTML = `A média dos valores são: ${(sum(...arguments) / arguments.length)}`
}

