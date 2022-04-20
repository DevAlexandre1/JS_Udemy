const valorInp = document.querySelector("#inpValor")
const valorI = valorInp.value

const catInp = document.querySelector("#inpCategoria")
const catI = catInp.value

const obsInp = document.querySelector("#inpObs")
const obsI = obsInp.textContent

const btnAdicionar = document.getElementById("btnAdicionar")

const ulResultado = document.getElementById("ulResultado")


btnAdicionar.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("Clicou no botao adicionar")
    console.log(`O Valor do gasto é: ${valorI}`)
    console.log(valorI)
    console.log(catI)
    console.log(obsI)
    console.log(valorInp)

})

//Método construtor para adicionar gastos
let addGasto = [
    {
        valor: valorI,
        categoria: catInp,
        observacao: obsI

    }
]


function CriarLi(){
const liAdd = document.createElement("li")
ulResultado.appendChild("liAdd")


}
