
let readline = require('readline-sync');

var palavras = [];

let quantidade = parseInt(readline.question('Quantos nomes deseja inserir? '));

for (let i = 0; i < quantidade; i++) {
    palavras[i] = readline.question(`Digite a palavra ${i + 1}: `);
}

var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

var palavraOculta = Array(palavraSecreta.length).fill("_");

var tentativas = 6;

var letrasTentadas = [];

console.clear();

while (tentativas > 0) {
    var palavraExibida = palavraOculta.join(" ");
    console.log("\nPalavra:", palavraExibida); 
    console.log("Tentativas restantes:", tentativas); 
    console.log("Letras tentadas:", letrasTentadas.join(", "));

    var letra = readline.question("Digite uma letra: ").toLowerCase(); 

    if (letrasTentadas.includes(letra)) {
        console.log("Você já tentou essa letra. Tente outra.");
        continue;
    }

    letrasTentadas.push(letra);

    var letraCorreta = false;
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
            palavraOculta[i] = letra; 
            letraCorreta = true; 
        }
    }

    if (letraCorreta) {
        console.log("Isso aí! A letra está na palavra!");
    } else {
        console.log("A letra não está na palavra.");
        tentativas--; 
    }

    if (!palavraOculta.includes("_")) {
        console.log("\nParabéns! Você adivinhou a palavra:", palavraSecreta);
        break; 
    }
}

if (tentativas === 0) {
    console.log("\nQue pena! Você perdeu. A palavra era:", palavraSecreta);
}