function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let n = getRndInteger(1, 37);
let cor = ['vermelho', 'preto'];


let aposta = prompt('Qual a sua aposta? (numero e cor)');

if( === valor2 && valor1 === valor3){
  resultado = 'venceu';
}else{
  resultado = 'perdeu';
}

console.log(`O resultado foi ${n} ${cor}. Você ${resultado}!`)