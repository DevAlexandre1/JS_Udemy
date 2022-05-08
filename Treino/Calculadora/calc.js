const painel = document.querySelector("#painel")

const btnNum = document.querySelectorAll(".btnEntrada")

const btnOperadores = document.querySelectorAll(".btnOperadorEntrada")

let valorPainel = []
let valorShow = "" 

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
//botao =
btnNum[11].addEventListener("click", function addValores(){
    valorPainel.push(btnNum[11].value)
    valorShow = valorPainel.join("")
    painel.textContent = valorShow
})

//botões operadores
