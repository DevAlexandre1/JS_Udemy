const inpNome = document.getElementById("inpNome")
const inpEmail = document.getElementById("inpEmail")
const btnCheck = document.getElementById("inpCheck")
const contratotxt = document.getElementById("contratoP")
const btnCadastrar = document.getElementById("btnCadastrar")


let nome = inpNome.value
let email = inpEmail.value
let checkValor = btnCheck.checked

//let contratoP = contratotxt.value


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
    if(checkValor == true){
        btnCadastrar.disabled = false

    }else{
        console.log(checkValor)
    }
}


function cadastrar(){
if((nome !== null)&& (email !== null) && (check == true)){    
    contratotxt.innerHTML = "Contrato assianado"
}else{
    contratotxt.innerHTML = "Verificar informações: Nome, Email e aceite do contrato"
}

}


