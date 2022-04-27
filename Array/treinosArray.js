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


arrayMain.forEach((valor)=>{
    //console.log(`O index é ${index} e o valor do elemento é ${valor}`)

    if(valor % 2 ===0){
        numerosPar.push(valor)
    }else{
        numerosImpar.push(valor)
    }
})

console.log(numerosImpar)
console.log(numerosPar)
