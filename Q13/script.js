let n = parseInt(prompt("Digite um número"));
let i;


for (i = 1; i*(i+1)*(i+2) < n; i++){
}

if (i*(i+1)*(i+2) == n){
  document.write("É triangular: " + i + "*" + (i+1) + "*" + (i+2) + "=" + n);
}else{
  document.write("Não é triangular");
}
