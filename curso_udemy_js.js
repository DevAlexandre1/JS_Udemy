/*
//Métodos dentro de objetos

const lapis ={
    modelo: "preto",
    qtd: 10,
    comprar(nqtd){
       if(nqtd > this.qtd){
          console.log(`Quantidade insuficiente, maximo de lapis em estoque: ${lapis.qtd} unidades`)
       }else{
          lapis.qtd -= nqtd
          console.log('Compra realizada com sucesso')
          console.log(`Quantidade restante no estoque: ${lapis.qtd} unidades.`)
 
       }
    },
    reporEstoque(reporEstoque){
       this.qtd += reporEstoque
       console.log(`Estoque reposto, quantidade atual: ${lapis.qtd}`)
    }
    
 }
 
 //lapis.comprar(8)
 lapis.reporEstoque(50)


 //Objetos dentro de Arrays

 const pessoas = [{
     nome: "Carlos",
     idade: 30 },
 {
    nome: "Iolanda",
    idade: 40 },
 {
    nome: "Marcos",
    idade: 20 },
 {
    nome: "Lilia",
    idade: 10}]

let posi = pessoas.length
//console.log(posi)

for(let i = 0; i <= posi;i++){
    let lugar = i
    console.log(`O Nome da pessoa da posição ${lugar}:  ` + `${pessoas[lugar].nome}`)
    console.log(`A idade da pessoa da posição ${lugar}:  ` + `${pessoas[lugar].idade} anos`)
    console.log('###################################################################')
    
}
//CRIAR UM ARRAY COM NUMEROS RANDOMICOS NÃO REPETIDOS 

function generateRandomInteger(max){
    return parseInt(Math.random()*max)
}

    let arr = []

    while(arr.length <= 20){
        let randomNumero = generateRandomInteger(30)
        
        if(arr.indexOf(randomNumero) < 0){
            arr.push(randomNumero)
        }else{
            console.log(randomNumero, "Já existe no Array")
        }
    }
    console.log(arr)
    
    */

    //UTILIZANDO O TRY CATCH


    //se o comando dentro de TRY gerar erro o CATCH captura o erro
    let soma = ""

    try{
        soma=(3,"a")
    }catch(e){
        alert("Sum aceita apenas numeros")
        console.log(e.message)
    }finally{
        console.log("Este bloco finally é sempre executado, independente da situação dos blocos acima")
    }
