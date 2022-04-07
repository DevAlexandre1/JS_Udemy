// ASSIM FUNCIONOU NORMAL
//ACREDITO QUE SEJA ALGO DO BOTTÃO QUE QUANDO CLICA TRANSFORMA O VALOR DO resultadoIMC em STRING



let inpAltura = document.getElementById("txtaltura")
let inpPeso = document.getElementById("txtpeso")
const divResultado = document.getElementById("resultado")

let peso = parseFloat(inpPeso)
let altura = parseFloat(inpAltura)

let resultadoIMC = peso / (altura**2)
function calcular(){
    
    
    //if(typeof res !== "number"){
    //     throw Error("Apenas numeros")
    
    if(resultadoIMC < 10000){         
      divResultado.innerHTML = "Passou pelo if"

    }else{
      divResultado.innerHTML = "Não passou pelo if"
    }
/*
    if(resultadoIMC < 18.5){
        divResultado.innerHTML = (`Seu IMC é ${resultadoIMC} e seu grau de obesidade é 0`);
        return
    }
    if((resultadoIMC > 18.5)  &&  (res < 24.9)){
        divResultado.innerHTML = (`Seu IMC é ${resultadoIMC} e seu grau de obesidade é 0`);
        return
    }
    if((resultadoIMC > 25 ) &&  (resultadoIMC < 29.9)) {
        divResultado.innerHTML = (`Seu IMC é ${resultadoIMC} e seu grau de obesidade é I`);
        return
    }    
    if((resultadoIMC > 30)  &&  (resultadoIMC < 39.9)) {
        divResultado.innerHTML = (`Seu IMC é ${resultadoIMC} e seu grau de obesidade é II`);
        return
    }   
    if(resultadoIMC > 40) {
        divResultado.innerHTML = (`Seu IMC é ${resultadoIMC} e seu grau de obesidade é III`);
        return
    }else{
        divResultado.innerHTML = (`Não passou pelos IFs${resultadoIMC} `)
        return
    }*/
}






