const painel = document.querySelector("#painel")

const btnNum = document.querySelectorAll(".btnEntrada")

const btnOperadores = document.querySelectorAll(".btnOperadorEntrada")

let valorPainel = 0

btnNum[0].addEventListener("click", function addValores(){
    painel = valorPainel

    valorPainel.textContent = push(btnNum[0].value)
})
btnNum[1].addEventListener("click", function addValores(){

    painel.textContent = btnNum[1].value
})
btnNum[2].addEventListener("click", function addValores(){

    painel.textContent = btnNum[2].value
})
btnNum[3].addEventListener("click", function addValores(){

    painel.textContent = btnNum[3].value
})
btnNum[4].addEventListener("click", function addValores(){

    painel.textContent = btnNum[4].value
})
btnNum[5].addEventListener("click", function addValores(){

    painel.textContent = btnNum[5].value
})
btnNum[6].addEventListener("click", function addValores(){

    painel.textContent = btnNum[6].value
})
btnNum[7].addEventListener("click", function addValores(){

    painel.textContent = btnNum[7].value
})
btnNum[8].addEventListener("click", function addValores(){

    painel.textContent = btnNum[8].value
})
btnNum[9].addEventListener("click", function addValores(){

    painel.textContent = btnNum[9].value
})
btnNum[10].addEventListener("click", function addValores(){

    painel.textContent = btnNum[10].value
})