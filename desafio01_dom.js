const inpNome = document.getElementById("inpNome")
const inpEmail = document.getElementById("inpEmail")
const btnCheck = document.getElementById("inpCheck")
const btnCadastrar = document.getElementById("btnCadastrar")


let nome = inpNome.value
let email = inpEmail.value
let checkValor = btnCheck.checked

btnCadastrar.disabled = true

function editar(){
    inpEmail.disabled = false   
    inpNome.disabled = false
    inpNome.focus()
}

function nomeDisable(){
    inpNome.disabled = true
    inpEmail.focus()
}

function checkClick(){   
    let checkValor = btnCheck.checked
    if(checkValor){
        btnCadastrar.disabled = false
    }else{
        btnCadastrar.disabled = true
    }
}


function cadastrar(){
    if((nome !== null)&& (email !== null)){    
        contratoP.innerHTML = "Contrato assianado"

    }else{
        contratoP.innerHTML = "Verificar informações: Nome, Email e aceite do contrato"
    }
}


