idade = prompt("Quantos anos você tem?");
if (idade < 18) {
  alert("você NÃO pode jogar jokenpo");
}
if (idade >= 18) {
  escolhaJogador = prompt("escolha 1-pedra, 2-papel ou 3- tesoura");
  escolhaComputador = Math.floor(Math.random() * 3) + 1; // random é a forma aleatória
  if (escolhaJogador == escolhaComputador) {
    alert("empate!");
  }
  if (escolhaJogador == 1 && escolhaComputador == 2) {
    alert("computador venceu!");
    alert("escolha computador: " + escolhaComputador);
  }
  if (escolhaJogador == 1 && escolhaComputador == 3) {
    alert("você venceu!");
    alert("escolha computador: " + escolhaComputador);
  }
  if (escolhaJogador == 2 && escolhaComputador == 1) {
    alert("você venceu!");
    alert("escolha computador: " + escolhaComputador);
  }
  if (escolhaJogador == 2 && escolhaComputador == 3) {
    alert("computador venceu!");
    alert("escolha computador: " + escolhaComputador);
  }
  if (escolhaJogador == 3 && escolhaComputador == 1) {
    alert("computador venceu!");
    alert("escolha computador: " + escolhaComputador);
  }
  if (escolhaJogador == 3 && escolhaComputador == 2) {
    alert("voce venceu!");
    alert("escolha computador: " + escolhaComputador);
  }
}