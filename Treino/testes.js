/*(() =>{
    function pessoa(){
        this.anos =0
    
        for(let i = 0;i<15;i++){
            setInterval(()=>{
                this.anos = this.anos +1
                console.log('Qual this?', this)
                console.log('Qual a idade?', this.anos)

            },1000)
        }
    }
    const p1 = new pessoa()
    console.log(p1.anos)
})()

//Construtor carro
function Carro(modelo,ano, valor,cor, velocidadeMax){
    this.modelo = modelo,
    this.ano = ano,
    this.valor = valor,
    this.cor = cor,
    this.velocidadeMax = velocidadeMax
    this.equiparCarro = function(turbo,intercoler){
        if(turbo == null){
            turbo = 0
        }else if(intercoler == null){
        intercoler = 0
        }
         this.velocidadeMax = this.velocidadeMax + turbo + intercoler
     }
}
const C1 = new Carro("Gol", 1991,119.00,"Preto",165)
C1.equiparCarro(20,50)

console.log(C1)

*/

//Criar um array bidimensional  (Array salvo dentro de outro array)

const garagem = []

garagem[0]= ["Gol","Prata",1998, 29000]
garagem[1]= ["Palio","Preto",2008, 19000]
garagem[2]= ["Corsa","Chumbo",2018, 39000]
garagem[3]= ["Celta","Vermelho",2020, 21000]


garagem.push(["Maverick","Preto",1964,57000])

garagem.forEach((p,i)=>{    
    console.log(garagem[i])  
    //Procura em todos os array o lugar que estiver o elemento maverick  
    const carroAntigo = garagem[i].indexOf("Maverick")

    if(carroAntigo != -1){
        console.log(`O Carro antigo foi localizado no array ${i} na posição ${carroAntigo}`)
    }
})
//Mostra somente os elementos apartir do 2 da colocação armazenada na posição 4 do array
// console.log(...garagem[4].slice(2))

