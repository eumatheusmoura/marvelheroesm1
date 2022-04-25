// FASE 1 - Homem Aranha

function confereResposta1(respostaCerta) {
  var respostaJogador = prompt("Digite a resposta (A, B, ou C):");
  var contador = 3;

  while (contador >= 1) {
    if (respostaJogador.toUpperCase() === respostaCerta) {
      alert("Parabéns! Resposta correta!");
      return (location = "./capitaoamerica1.html");
    } else if (
      respostaJogador.toUpperCase() === "A" ||
      respostaJogador.toUpperCase() === "B"
    ) {
      contador--;
      alert(
        `Resposta incorreta, tente novamente!\n Tentativas restantes: ${contador}`
      );
      respostaJogador = prompt("Digite a resposta (A, B ou C):");
    } else {
      alert("Resposta inválida! Digite A, B ou C");
      respostaJogador = prompt("Digite a resposta (A, B ou C):");
    }
  }
  return (location = "./gameover.html");
}

// FASE 2 - Homem Aranha

function confereResposta1(respostaCerta) {
  var respostaJogador = prompt("Digite a resposta (A, B, ou C):");
  var contador = 3;

  while (contador >= 1) {
    if (respostaJogador.toUpperCase() === respostaCerta) {
      alert("Parabéns! Resposta correta!");
      return (location = "./capitaoamerica2.html");
    } else if (
      respostaJogador.toUpperCase() === "A" ||
      respostaJogador.toUpperCase() === "B"
    ) {
      contador--;
      alert(
        `Resposta incorreta, tente novamente!\n Tentativas restantes: ${contador}`
      );
      respostaJogador = prompt("Digite a resposta (A, B ou C):");
    } else {
      alert("Resposta inválida! Digite A, B ou C");
      respostaJogador = prompt("Digite a resposta (A, B ou C):");
    }
  }
  return (location = "./gameover.html");
}

// FASE 3 - Homem Aranha

function confereResposta1(respostaCerta) {
  var respostaJogador = prompt("Digite a resposta (A, B, ou C):");
  var contador = 3;

  while (contador >= 1) {
    if (respostaJogador.toUpperCase() === respostaCerta) {
      alert("Parabéns! Resposta correta!");
      return (location = "./capitaoamerica1.html");
    } else if (
      respostaJogador.toUpperCase() === "A" ||
      respostaJogador.toUpperCase() === "C"
    ) {
      contador--;
      alert(
        `Resposta incorreta, tente novamente!\n Tentativas restantes: ${contador}`
      );
      respostaJogador = prompt("Digite a resposta (A, B ou C):");
    } else {
      alert("Resposta inválida! Digite A, B ou C");
      respostaJogador = prompt("Digite a resposta (A, B ou C):");
    }
  }
  return (location = "./gameover.html");
}
