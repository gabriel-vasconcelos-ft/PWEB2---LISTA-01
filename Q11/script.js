let n1 = parseInt(prompt("Digite um número"));
let n2 = parseInt(prompt("Digite o segundo numero"));
let n3 = parseInt(prompt("Digite o terceiro numero"));
let soma;

  if (n3 > n1){
    if (n1 > n2){
      soma = n1 + n3;
      document.write("A soma é: " + soma);
    }else if (n2 < n3){
      soma = n2 + n3;
    document.write("A soma é: " + soma);
  }
}
    
    if (n1 > n2){
      if (n2 > n3){
    soma =  n2 + n1;
    document.write("A soma é:  "  + soma);
    }else if (n3 < n1){
    soma = n3 + n1;
    document.write("A soma é:  "  + soma);
    }
  }
    
    if (n1 < n2){
      if (n3 < n1){
    soma = n1 + n2;
    document.write("A soma é:  "  + soma);
    }else if (n3 < n2){
    soma = n3 + n2;
    document.write("A soma é:  "  + soma);
    }
  }
