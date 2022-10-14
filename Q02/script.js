let n = parseInt(prompt("Digite um número inteiro"));

let i = parseInt(1);
let soma = parseInt(0);

while (i <= n) {
    soma = soma + i;
    i = i + 1;
  }

  document.write(soma);