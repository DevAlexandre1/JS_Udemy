/*const pessoa = new pessoa(nome, cpf, idade,  nota, aprovado){
    nome: nome,
    cpf: cpf,
    idade =  idade || null,
    nota: nota,
    aprovat = function(nota){
        if(nota < 6){
            aprovado = false
        }else{
             aprovado = true
        }
    }
}
*/

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
    console.log(`${primeiroNumeros1}-${ultimosNumeros1}`)        
}
mask(tel1)