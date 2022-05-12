//Função abaixo representa um encapsulamento do objeto e uma verificação de tipos, veja que podemos ter 
//acesso a tipos somente pelos metodos gets e sets

(function(){
    let tipo = ""
    const tiposPermitidos = {"mamifero":true,"reptil":true}

    const cachorro = {
        nome : "Mel",
        get tipo(){
            return tipo
        },
        set tipo(_tipo){
            if(tiposPermitidos[_tipo]){
                return tipo = _tipo
            }else
                throw new Error("Tipo não permitido")
            
        }

    }

    this.cachorro = cachorro
})()