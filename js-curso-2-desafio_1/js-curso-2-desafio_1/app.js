let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarClick(){
    console.log('o botão foi clicado');
}

function verificarClickalert(){
    console.log('EU AMO JS');
    alert ('eu AMO JavaScript');
}

function verificarPrompt(){
    let cidade 
    cidade = prompt ('Digite uma cidade do Brasil que você já visitou');
    alert (`Estivem em ${cidade} e pensei em você!`);
  
}

function verificarSoma(){
    let num1 = prompt('Digite o primeiro número:');
    let num2 = prompt('Digite o segundo número:');

num1 = Number(num1); 
num2 = Number(num2);

let soma = num1 + num2;

alert("A soma é: " + soma);
}