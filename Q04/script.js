let n = parseInt(prompt("Digite um número inteiro"));

fatorial = n;

if(n!= 0){
for (let i = 1; i < n; i++) {
  fatorial *= i;
}
} else {
  fatorial=1;
}

  document.write(fatorial);

 