function sum(){
    let n1 = Array.from(arguments)
    let soma = n1.reduce(function(acumulador,atual){
        return  acumulador + atual
    })
    console.log(soma)
}

function avarege(){
    let n2 = Array.from(arguments)
    let soma2 = n2.reduce(function(acumulador,atual){
        return atual + acumulador
    })
    let media = soma2 / arguments.length
    console.log(media)
}

sum(1,2,3,4,5,6)
avarege(10,20,30,40,50,60)

// DESAFIO CONCLUIDO COM SUCESSO!

