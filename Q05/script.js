let anterior = parseInt(prompt("Digite o valor"));
let atual = parseInt(prompt("Digite o valor"));
let resto;
    
    resto = atual % anterior;
    while (resto != 0) {
      resto = anterior % atual;
      anterior = atual;
      atual = resto;
    }
    document.write(" O máximo divisor é: " + anterior);
  
  