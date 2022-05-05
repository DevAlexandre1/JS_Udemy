function Pessoa(name,idade,peso,altura){
    this.name = name
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.fortuna= (dim)=>{
       console.log(`O ${this.name} tem uma fortura de ${dim}`)
    }

}


const p1 = new Pessoa("Alexandre",18,83,180)
p1.fortuna(465700) 
console.log(p1)
