//Treinando condições
/*
let salarioMes;
salarioMes = 2500;


switch(salarioMes){

    case  1000:
        console.log('Abaixo do esperado');
        break;

    case 1501:
        console.log('Salário esperado');
        break;

    case 2000:
    console.log('Salário acima do esperado');
    break;

    case 2500:
    console.log('Salário muito acima do esperado');
    break;

    default:
        console.log('Salario incorreto');
}


//Treinando laços

// 1.For
// 2.While
// 3.Do While
// 4. For in
// 5. For of

for(let i = 0; i < 20; i++){
    if(i % 2 !==0){
    console.log('Numeros impares',i);
    }
    else{
        console.log('Numeros pares',i);
    }
    
}

//Treinando fizzBuzz

/*Se o valor fizzbuzz for:
dividido por 3 => retornar Fizz
dividido por 5 => retornar Buss
dividido por 3 e 5 => retornar fizzBuss
Não dividido por 3 ou  5 => retornar a entrada
Não é um numero => retornar 'Não é um numero'


//IMPORTANTE ----> fizzBuzz compara valores baseados com o tipo de entrada!


let resultado = fizzBuzz(100);
console.log(resultado);

function fizzBuzz(entrada){

    //Se o valor não for numero
    if(typeof entrada !== 'number')
    return 'Não é um numero';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
    return 'fizzBuzz';
    if(entrada % 3 === 0)
    return 'fizz';
    if(entrada % 5 === 0)
    return 'Buzz';

    return entrada;
}

let n = 100;

for(let i = 0; i < n;i++){

    let resultado = fizzBuzz(i);
    console.log(resultado);


    function fizzBuzz(entrada){

        //Se o valor não for numero
        if(typeof entrada !== 'number')
        return 'Não é um numero';
        if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'fizzBuzz';
        if(entrada % 3 === 0)
        return 'fizz';
        if(entrada % 5 === 0)
        return 'Buzz';

        return entrada;
    }
}
//Mais de uma condicional
// Calculando velocidade maxima

/*  Velocidade maxima permitida é até 70;
    A cada 5km de velocidade acima do permitido é colocado 1 ponto na carteira;
    math.Floor() está função arredonda o valor da variável;
    Caso pontos maior que 12, retornar 'Carteira suspensa';



verificarVelocidade(100);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if(velocidade <= velocidadeMaxima)
    console.log('Velocidade permitida');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log('Acima da velocidade, recebeu', pontos, 'pontos.')
    }
}


const v1 = 50;
for(let i = 0; i <= v1; i++){
    valorverificar(v1);

    function valorverificar(entrada){
       entrada = i;
        if(entrada % 2 === 0){
            console.log(entrada, 'Par');

        }
        else{
            console.log(entrada,'Impar');
        }
    }
}


//Criar um método que verifica as propriedades de um objeto e traz apenas os tipos string

const  filme ={
    Titulo: 'Homem de ferro',
    Ano: 2022,
    Personagem: 'Tony Stark',
    Valor: 250.000

}
exibirPropriedade(filme);
function exibirPropriedade(obj){
    
    for(prop in obj)
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop])
        }
    
}

let salarioMes;
salarioMes = 1800;


if(salarioMes < 1000){
    console.log('Abaixo do esperado');
}
if((salarioMes > 1000) && (salarioMes < 1500)){
    console.log('Salário esperado');
}
if((salarioMes > 1501) && (salarioMes < 2000)) {
    console.log('Salário atual');
}    
if((salarioMes > 2001) && (salarioMes < 2500)) {
    console.log('Salário acima do esperado');
}   
if(salarioMes > 2500) {
    console.log('Salário muito acima do esperado');
}   


peso = 80;
altura = 1.80;

res = Math.floor( peso / altura**2);

function calcular(res){

    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é 0</h2>`;

}

if(res < 18.5){
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é 0</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é 0')
}
if(( res > 18.5)  &&  (res < 24.9)){
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é 0</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é 0')
}
if((res > 25 ) &&  (res < 29.9)) {
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é I</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é I')
}    
if((res > 30)  &&  (res < 39.9)) {
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é II</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é II')
}   
if(res > 40) {
    //restela.innerHTML = `<h2>Seu IMC é ${res} e seu grau de obesidade é III</h2>`;
    console.log('Seu IMC é', res,'Seu grau de gordura é III')
}   
        


//criar funça~o somar que retonra a soma de todos os multiplos de 3 e 5
somar(100);
function somar(limite){
    let soma = 0;
    for(let i = 1; i <= limite;i++){
        if(i % 3 === 0){
            soma = soma + i;
            console.log(i,'Multiplo de 3')
        }
        if(i % 5 === 0){
            console.log(i,'Multiplo de 5')
            soma = soma + i;
        }
        else{
            console.log(i)
        }
    }
    console.log('-----------------RESULTADO-----------------')
    console.log('O Valor da soma de todos os numeros é', soma )
    console.log('-------------------------------------------')
}

//Exercicio nota escolar, obter a media das notas dos alunos de um array

//0-59: E
//60-69: D
//70-79:C
//80-90:B
//91-100:A

const array = [70,70,80];

console.log(mediaDoAluno(array));
function mediaDoAluno(notas){
     const media = calcularMedia(notas);            
      
     if(media<59) return 'F';
     if(media<69) return 'D';
     if(media<79) return 'C';
     if(media<89) return 'B';
     return 'A'
}



function calcularMedia(array){
    let soma = 0;
    for(let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}




exibirAsterisco(10);

function exibirAsterisco(linhas){
let aste = '';

    for(let i = 0; i <= linhas;i++){
        aste = aste + '*';
        console.log(aste)
    }
}


//Exibir numeros primos
//IMPORTANTE SEMPRE QUEBRAR FUNCOES(Componentes)

exibirNprimos(15);
function exibirNprimos(limite){

	for(let numero = 2; numero <= limite; numero++){	

        if(numeroprimo(numero)) console.log(numero);
	}
}

function numeroprimo(numero){
		
    for(let divisor = 2;divisor<numero;divisor++){
    
        if(numero % divisor ===0){
           return false;          
        }
    }
    return true;
}


//Simplificando objetos e funções IMPORTANTE - função de fabrica

const celular = {
	marcaCelular: 'Asus',
	tamanhoTela: {
		vertical: 155,
		horizontal:75
	},
	capacidadeBateria: 5000,
	ligar: function(){
		console.log("Fazendo ligação...")
	}
}

//MODO SIMPLIFICADO IMPORTANTE

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
	return{
		marcaCelular,
		tamanhoTela,
		capacidadeBateria,
		ligar(){
			console.log("Fazendo ligação...")

		}
	}
}

//Criando um objeto celular

const celular1 = criarCelular('Asus',5.5,5000);
console.log(celular1);

//Função construtor

//camelCase
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
	return{
		marcaCelular,
		tamanhoTela,
		capacidadeBateria,
		ligar(){
			console.log("Fazendo ligação...")

		}
	}
}
//Pascal case - Metodo construtor

function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria= capacidadeBateria,
    this.ligar = function(){
            console.log("Fazendo Ligação...")
    }
}

const celular = new Celular('Asus', 5.5,5000 );
console.log(celular);

celular.ligar();


function Carro(modeloCarro,anoCarro,valorCarro){
    this.modelo = modeloCarro,
    this.ano =  anoCarro,
    this.valor = valorCarro,
    this.andar = function(){
        console.log("Carro andando")
    }
}
const CarroA = new Carro('Gol',2010,29.000);
console.log(CarroA);
CarroA.andar();

//Objetos em JS são totalmente dinamicos
//Exemplo

const mouse = {
    cor: 'red',
    marcar: 'dazz'
}

//voce pode inserir atributos ao objeto de qualquer parte

mouse.velocidade = 500;

// voce pode adicionar função ao objeto de qualquer parte

mouse.trocarDPI= function(){
    console.log('Mudando DPI');
}

//Voce pode deletar função ou atributo do objeto de onde estiver

delete mouse.cor;
mouse.trocarDPI();
console.log(mouse);


//Clonar objetos 


const celular = {
	marcaCelular: 'Asus',
	tamanhoTela: {
		vertical: 155,
		horizontal:75
	},
	capacidadeBateria: 5000,
	ligar: function(){
		console.log("Fazendo ligação...")
	}
}

//clocando o objeto acima

const novoCelular = Object.assign({},celular);
console.log(novoCelular);
novoCelular.ligar();

*****************************************
//FORMA SIMPLIFICADA DE CLONAR OBJETOS

const celular2= {...celular};
console.log(celular2);
******************************************



//Função MATH - VARIAS FUNÇÕES E COMANDO PDF SALVO EM DOCS

//DATA - COMANDOS SALVOS EM PDF NA PASTA DOCS

TREINANDO FUNÇÕES

function endereco(rua,cidade,cep){
    return{
    rua,
    cidade,
    cep,
    exibirEndereco(){
        console.log(endereco1);
    }
    }
}

const endereco1 = endereco('ruaA','Uberaba',38066000);
endereco1.exibirEndereco();




//Brincando com os objetos

function carro(modelo,ano,valor,cor){
    return{
        modelo,
        ano,
        valor,
        cor,
        exibirVelocidade(){
            console.log('Velocidade atual do carro é',180,'Km');
        },
        exibirTemperatura(){
            console.log('Temperatura atual do carro é',90,'graus');
        }
    }
}

const carroA = carro('Palio', 2022,50,'Preto');
const CarroB = carro('Gol',2018,30,'Braco');

//carroA.exibirTemperatura();

//console.log(CarroB);
//CarroB.exibirVelocidade();

carroA.cor = 'verde';

console.log(carroA.ano);



//Exercicio Comparando igualdade entre objetos

function endereco(rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep

}

const endereco1 = new endereco('a','b','c');
const endereco2 = new endereco('a','b','c');

function saoIguais(endereco1,endereco2){
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep

}
console.log(saoIguais(endereco1,endereco2));


//mostra se os dados estão salvos no mesmo local de memoria
function temEnderecoMemoriaIguais(endereco1,endereco2){

    return endereco1 === endereco2;

}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2));



//CRIAR UM OBJETO QUE EXIBIRA AS SEGUINTES PROPRIEDADES: TITULO, MENSAGEM, AUTOR, VIZUALIZACOES, COMENTARIOS(AUTOR, MENSAGEM),ESTAO AO VIVO

//Leitura: O objeto postagem é declarado suas propriedades e já recebendo seus atributos

let postagem = {
    titulo : 'x=men',
    mensagem : 'Ola',
    autor : 'eu',
    vizualizacoes : 123,
    //Abaixo é um array
    comentarios : [
        {autor:'a', mensagem:'b'},
        {autor: 'b', mensagem: 'b'}

    ],
    estaoAoVivo : true

}

console.log(postagem);





//FUNÇÃO CONTRUTOR DE OBJETOS
function postagem(titulo,mensagem,autor){
    this.titulo =titulo,
    this.mensagem =mensagem,
    this.autor = autor,
    this.visualizacoes =0,
    this.comentarios=[],
    this.estaAoVivo = false 
}



let postagem1 = new postagem('Jurassic','Meu filme preferido','Jhon')

    console.log(postagem1);

       //DECLARANDO ARRAY
            const n = [] //Declarando um array vazio
            const n2 = [True, "Daniel", 28, new Array[2, 10, 25]]//Declarabdo um array com variáveis
            n[0] = "cMarcos" //atribuindo valor marcos a posição 0 do array n
            n[1] = "Lucas" //atribuindo valor Lucas a posição 1 do array n
            console.log(n) //Mostrando os valores das posições do array n
            console.log(n2[3][2]) //Mostrando o valor da posição 2 do array que esta na posição 3.
            n.push("a") // definindo valor de dentro do array na posição 0
            n.push[3]("d") // definindo valor de dentro do array na posição 4

            //DECLARANDO OBJETOS

            const pessoa = {
                nome: "Daniel",
                idade: 40

            }

            pessoa.nome = "Lucas"
            console.log(pessoa)
            console.log(pessoa.nome)
            console.log(pessoa["idade"]
            )


            const carro ={
                modelo: "Gol",
                valor: 28.000,
                ano: 2010,
                testedriver(){
                    console.log("testando")
                }
            }
*/


