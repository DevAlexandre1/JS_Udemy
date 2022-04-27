//Crie um array de numeros par e impares filtrandos de outro arraygeral
/*
const arrayMain = [1,3,5,2,6,12,34,23,4,5,89,76]
const x = arrayMain.length
const numerosPar = []
const numerosImpar = []

for(let i = 0; i < x;i++){

    if((arrayMain[i]) % 2 ===0){
        numerosPar.push(arrayMain[i])
        
    }else{
        numerosImpar.push(arrayMain[i])
    }
    
}
console.log(numerosPar)
console.log(numerosImpar)


*/
//Fazendo mesmo exercicio acima utilizando o forEach

const arrayMain = [1,3,5,2,6,12,34,23,4,5,89,76]
const x = arrayMain.length
const numerosPar = []
const numerosImpar = []


arrayMain.forEach((valor,indice,array)=>{
    //o indice e o array são opcionais
    //console.log(`O index é ${index} e o valor do elemento é ${valor}`)
    
    if(valor % 2 ===0){
        numerosPar.push(valor)
    }else{
        numerosImpar.push(valor)
    }
})

//console.log(numerosImpar)
//console.log(numerosPar)

//Multiplique os valores abaixo em 3x
const arrayMain1 = [1,3,5,2,6,12,34,23,4,5,89,76]


const arrayMult = arrayMain1.map((element)=>{
    return element * 3
})
//console.log(arrayMult)



//
function formatarNome(nomeCompleto){
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaco =  nomeCompleto.indexOf(" ")
    if(primeiroEspaco <0){
        return nomeCompleto
    }
    
    let primeiroNome = nomeCompleto.slice(0,primeiroEspaco)
    let sobreNome = nomeCompleto.slice(primeiroEspaco+1)
    return sobreNome +", "+ primeiroNome
}

// console.log(formatarNome("Daniel")) //retornar Daniel    
// console.log(formatarNome("Daniel Moraes")) //retornar Morais, Daniel    
// console.log(formatarNome("Daniel Tapilas Moraes")) //retornar Tapilas Morales,Daniel    