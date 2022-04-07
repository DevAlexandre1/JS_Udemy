

//Construir uma função que calcula a media
// requisitos
//Pode receber um ou mais valores numericos
//deve retornar um unico numero
//deve gerar um erro caso receber um numero não numerico
//deve retornar zero caso recebr nenhum parametro


//Desafui função 1
/*
function mediaN(arr = []){
    let soma = 0
    let qtdValores = arr.length
    let mediaRes =0
    for(let i = 0; i < qtdValores;i++){              
        if( typeof arr[i] !== "number" ){
            throw Error("Um dos valores digitados não é um numero")
        }else{
            soma +=arr[i]
            mediaRes = soma / qtdValores    
        }
    }
    console.log(`${mediaRes}`)
}
mediaN([50,60,80,70,100])
*/

//Desafio 02 - Criar uma função que calcula um IMC

/*
function calc(){
    let alturaA =  prompt("informe sua altura")
    let pesoP = prompt("Informe seu peso")
    let altura = parseFloat(alturaA)
    let peso = parseFloat(pesoP)
    let resImc = ""
    const resultadoIMC = window.document.getElementById("calcResImc")
    
    resImc = peso / (altura**2)
    if(typeof peso !== "number" || typeof altura !== "number"){
            throw Error("Dados informados incorretos")
    }else if(peso == "" || altura == ""){
            throw Error("Esqueceu de informar um dos dados")
    
        }else{
            console.log(`Altura: ${altura}`)
            console.log(`Peso: ${peso}`)
        
       
        resultadoIMC.innerHTML("############# RESULTADO CALCULO IMC ########## <br>")
        resultadoIMC.innerHTML(`Peso: ${peso} <br>`)
        resultadoIMC.innerHTML(`Altura: ${altura}<br>`)
        resultadoIMC.innerHTML(`Seu IMC é: ${resImc}`)
        
    }
    
    (function(){



    })()
    

}

*/

//IMC FUNCIONANDO DENTRO DO CONSOLE

function calcIMC(peso,altura){
    let resultImc = peso / (altura**2 )

    if(peso === undefined || altura === undefined){
        console.log("Por favor informar peso e altura")
    }else
        return resultImc
}

function grau(resultImc){
    if(resultImc < 18.5){
        return "Abaixo do peso"
    }else if(resultImc < 24.9){
        return "Peso normal"
    }else if(resultImc < 29.9){        
        return "Sobre peso"       
    }else if(resultImc <34.9){
        return "Obesidade Grau I"
    }else if(resultImc <36.9){
        return "Obesidade Grau II"
    }else
        return "Obesidade Grau III"
}

let IMC = calcIMC(52,1.53)
console.log(IMC)
console.log(grau(IMC))
