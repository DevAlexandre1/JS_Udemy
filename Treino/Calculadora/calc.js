const painel = document.querySelector("#painel")

const btnNum = document.querySelectorAll(".btnEntrada")
const btnOpe = document.querySelectorAll(".btnOperadorEntrada")



let valorPainel = []
let valorShow = "" 
let valor1 = 0
let TamanhoArray = 0
let opereradorCalc = 0
let arr1 = []
let arr2 = []




// Botoes de entrada
btnNum[0].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[0].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[1].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[1].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[2].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[2].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[3].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[3].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[4].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[4].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[5].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[5].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[6].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[6].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[7].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[7].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[8].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[8].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})
btnNum[9].addEventListener("click", function addValores(){
    valorShow = ""
    valorPainel = []
    painel.textContent = valorShow
})
btnNum[10].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[10].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})

btnNum[11].addEventListener("click", function addValores(){
    TamanhoArray = valorPainel.length   
    opereradorCalc = valorPainel[valor1]

    valor2 = valor1 +  1
  
    arr1 = valorPainel.slice(0,valor1)
    arr2 = valorPainel.slice(valor2,TamanhoArray)

    valor1num = arr1.join("")
    valor2num = arr2.join("")

    switch (opereradorCalc) {
 case "+":
    valorShow =  parseFloat(valor1num) + parseFloat(valor2num)
    painel.textContent = valorShow
 break;

 case "-":
    valorShow =  parseFloat(valor1num) - parseFloat(valor2num)
    painel.textContent = valorShow
 break;

 case "*":
    valorShow =  parseFloat(valor1num) * parseFloat(valor2num)
    painel.textContent = valorShow
 break;

 case "/":
    valorShow =  parseFloat(valor1num) / parseFloat(valor2num)
    painel.textContent = valorShow
 break;
    }

})


//botões operadores
btnOpe[0].addEventListener("click", function addOperadores(){
    valor1 = valorPainel.length
    valorPainel.push(btnOpe[0].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
    
} )
btnOpe[1].addEventListener("click", function addOperadores(){
    valor1 = valorPainel.length
    valorPainel.push(btnOpe[1].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
    
} )
btnOpe[2].addEventListener("click", function addOperadores(){
    valor1 = valorPainel.length
    valorPainel.push(btnOpe[2].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
    
} )
btnOpe[3].addEventListener("click", function addOperadores(){
    valor1 = valorPainel.length
    valorPainel.push(btnOpe[3].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
    
} )