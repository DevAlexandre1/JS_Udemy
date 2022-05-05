function carro(modelo){
    let velocidade = 0
    return{
        modelo,
        
        addValor(valor){
            return console.log(`O carro ${modelo} tem o valor de ${valor}`)
        },
        addAno(ano){
            return console.log(`O ano do carro é  ${ano}`)
        },
        addMotor(motor){
            return console.log(`O carro temo motor ${motor}`)
        },  
        equiparCarro(){
            velocidade = 100
            return console.log(`Este carro é modelo turbo`)
        },
        get velocidadeMAX(){

            console.log(`velocidade do carro é ${velocidade}`)
            return velocidade
        }
    }

}

const gol = carro("gol")
gol.addAno(2010)
gol.addMotor(1.6)
gol.addValor(30)
gol.equiparCarro()
gol.velocidadeMAX

