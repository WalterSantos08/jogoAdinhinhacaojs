# 🎭 Jogo da Forca em JavaScript 🎮

## 📜 Descrição
Este é um jogo da forca simples desenvolvido em JavaScript que roda no terminal. O usuário insere uma lista de palavras e o jogo seleciona aleatoriamente uma delas para ser adivinhada. O jogador tem um número limitado de tentativas para descobrir a palavra, inserindo letras uma por uma.

## 🔧 Pré-requisitos
Para executar este programa, você precisa ter instalado:
- 📌 [Node.js](https://nodejs.org/) (para rodar o script JavaScript no terminal)
- 📥 O pacote `readline-sync` para entrada de dados

## 🚀 Instalação
Antes de rodar o jogo, instale a dependência `readline-sync`:
```sh
npm install readline-sync
```

## 🎲 Como Jogar
1. 🎯 Execute o script no terminal com o comando:
   ```sh
   node nome_do_arquivo.js
   ```
2. 📝 Insira o número de palavras que deseja adicionar ao jogo.
3. ✏️ Digite cada palavra quando solicitado.
4. 🎰 O jogo selecionará aleatoriamente uma palavra para ser adivinhada.
5. 🔠 O jogador deve inserir letras para tentar descobrir a palavra.
6. 🏆 O jogo continua até que o jogador adivinhe a palavra ou esgote suas tentativas.

## 📜 Regras do Jogo
- 🕵️ O jogador tem **6 tentativas** para adivinhar a palavra.
- 🔤 Apenas letras do alfabeto são aceitas.
- 🚫 Letras já tentadas não podem ser repetidas.
- ✅ Se o jogador descobrir todas as letras da palavra, ele vence.
- ❌ Se as tentativas acabarem antes de descobrir a palavra, o jogo exibe a resposta correta.

## 🎭 Exemplo de Execução
```
Quantos nomes deseja inserir? 3
Digite a palavra 1: casa
Digite a palavra 2: banana
Digite a palavra 3: oceano

Palavra: _ _ _ _ _
Tentativas restantes: 6
Letras tentadas: 
Digite uma letra: a
Isso aí! A letra está na palavra!

Palavra: _ a _ a _
Tentativas restantes: 6
Letras tentadas: a
Digite uma letra: e
A letra não está na palavra.
...
```


