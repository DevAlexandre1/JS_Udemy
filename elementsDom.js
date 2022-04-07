
// Primeira forma
/*
(function a1(){
    const nomeLogado = "Alexandre"
    document.getElementById("teste1").textContent = "Bem vindo(a)," + nomeLogado
    
})()
*/

//Segunda forma
//Acessando dois h1 dentro de uma div
(function a2(){
    const nomeLogado = "_Alex_"
    const nomeLogado1 = "_Carlos_"
    
    const elemento = document.querySelectorAll("#teste h1")
    elemento[0].innerHTML = "Bem vindo(a)," + nomeLogado
    elemento[1].innerHTML = "Bem vindo(a)," + nomeLogado1

    const elemento1 = document.getElementById("teste3")
    elemento1.innerHTML += nomeLogado + nomeLogado1

})()


