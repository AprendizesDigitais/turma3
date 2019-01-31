function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let facilPergunta = [
    "Qual é a capital do Brasil",
    "",
    "",
    "",
    ""
];

let facilResposta = [
    ["São Paulo", "Brasilia", "Rio de Janeiro","Minas Gerais"],
    [],
    [],
    [],
    [],
];



function newQuestion(){
    n = aleatorio(0, 4);
    while( n == historico){
        n = aleatorio(0, 4);
    }
    historico = n;

    document.getElementById("questao").innerText = facilPergunta[n];

    document.getElementById("r1").value = facilResposta[n][0];
    document.getElementById("r2").value = facilResposta[n][1];
    document.getElementById("r3").value = facilResposta[n][2];
    document.getElementById("r4").value = facilResposta[n][3];
    document.getElementById("r5").value = facilResposta[n][4];
}