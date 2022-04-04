/*let numero1 = 5;
let numero2 = 5;
let numero3 = 8;
let media = (numero1 + numero2 + numero3) / 3;

//Se a média for maior que 7 aprovado;
//Se qualquer nota for menor que 5 reprovado;
//Se a media for menor que 7 e maior qye 6, recuperação;


if((numero1 < 5) || (numero2 < 5) || (numero3 <5)){
        console.log(`Reprovado, voce tirou nota menor que 5`)
}else if((media < 7) && (media >= 6)){
        console.log(`Está de recuperação, sua media foi ${media}`)
    }else {
        console.log(`Você passou direto, Parabens!!! sua média foi ${media}`)
    }



let velocidade = 70

let multado = (velocidade > 80) ? true: false;

console.log(multado);


if(multado){
    console.log(`Você foi multado e sua velocidade era ${velocidade}`);
}else{
    console.log(`Velocidade ${velocidade} não foi multado`);
    
}
*/


let dinheiro = 1600
let comprar = ""

switch(dinheiro){
    case 1000:
        comprar = "roupas"
        break
    case 1200:
        comprar = "roupas e tenis"
        break
    case 1500:
        comprar = "Comprar roupa, tenis e perfume"
        break
    default:
        if(dinheiro < 1000){
            comprar = "pobre paga conta"
        }else if(dinheiro > 2000){
            comprar = "O mundo"
        }else
            comprar = "Junta mais um pouco"
}   
console.log(comprar);

