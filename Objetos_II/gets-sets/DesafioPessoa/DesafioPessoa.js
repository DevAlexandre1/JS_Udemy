let _usuarios=[]
let user = ""
let consultaArr = ""
const pessoa = {
    get usuarios(){
        return _usuarios
    },
    set addUser(user){        
            _usuarios.forEach(function(el){
                if(el == user){
                    console.log("Usuário ja cadastrado")
                }//corrigir a função abaixo
                _usuarios.push(user)
                console.log("Usuário cadastrado com sucesso")            
            })        
        }
    },
    get usuario(){
        let findUser = _usuarios.length
        return _usuarios[findUser]
    }

}

//pessoa.addUser =  "Marcos"
console.log(_usuarios)
pessoa.usuarios
// console.log(consultaArr)
// console.log(typeof _usuarios)
// console.log(typeof consultaArr)