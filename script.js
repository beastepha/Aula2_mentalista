let secret = parseInt(Math.random() * 1001);

while (chute != secret) {
  var chute = prompt("Digite um número entre 0 e 1000");
  if (secret == chute) {
    alert("Você acertou!");
  } else if (chute > secret) {
    alert("Você errou, o númemro secreto é menor");
  } else if (chute < secret) {
    alert("Você errou, o númemro secreto é maior");
  }
}
