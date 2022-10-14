let n1 = parseInt(prompt("Digite um número"));
let n2 = parseInt(prompt("Digite o segundo numero"));
let n3 = parseInt(prompt("Digite o terceiro numero"));
  
  if (n3 > n1){
    if (n1 > n2){
      document.write("A ordem crescente é: " + n2 + "," + n1 + "," + n3);
    }else if (n2 < n3){
    document.write("A ordem crescente é: " + n1 + "," + n2 + "," + n3);
  }
}
    
    if (n1 > n2){
      if (n2 > n3){
    document.write("A ordem crescente é: " + n3 + "," + n2 + "," + n1);
    }else if (n3 < n1){
    document.write("A ordem crescente é: " + n2 + "," + n3 + "," + n1);
    }
  }
    
    if (n1 < n2){
      if (n3 < n1){
    document.write("A ordem crescente é: " + n3 + "," + n1 + "," + n2);
    }else if (n3 < n2){
    document.write("A ordem crescente é: " + n1 + "," + n3 + "," + n2);
    }
  }
