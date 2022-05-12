(function(){
    let _usuarios=[]
    this.pessoa = {
        
        get usuario(){
            if(_usuarios.length){
                return _usuarios[_usuarios.length -1]

            }
        },
        set addUser(user){        
                if(_usuarios.indexOf(user)< 0){
                    _usuarios.push(user)
                }else{
                    console.log("Usuário já consta na listagem")
                }
        },  
        get usuarios(){
            //Forma de proteger as referencias do seu codigo, inserir este metodo nos seus gets
            //Este metodo cria uma copia do retorno e impede que alterações utizando referencia funcione
            return [].concat(_usuarios)
        },
    }
})()


