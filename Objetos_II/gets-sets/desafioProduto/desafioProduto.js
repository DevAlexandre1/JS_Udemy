(function(){
    let _quantidade = 0
    let consultas = 0
    const produto = {
        get quantidade(){
            console.log(`Quantidade foi consultada ${++consultas} vez${consultas > 1 ? 'es': ''}`)
            return _quantidade
        },
        set addQuantidade(_Quantidade){
            if(_Quantidade < 1){
                throw new Error ("Quantidade incorreto")
            }else{
                _quantidade += _Quantidade

            }
        }
    }
    this.produto = produto
})()

produto.addQuantidade = 20
console.log("Estoque atual:",produto.quantidade)
produto.addQuantidade = 21
console.log("Estoque atual:",produto.quantidade)
produto.addQuantidade = 22
console.log("Estoque atual:",produto.quantidade)