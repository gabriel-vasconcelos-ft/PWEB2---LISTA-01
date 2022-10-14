let n = parseInt(prompt("Digite um número"));
let ultimo = 1;
let penultimo = 1;
let count=3;

/*if ((n==1) || (n==2)){
    document.write("1");
}else{
    for (count in range(2,n)){
        termo = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = termo;
        count += 1;   
    document.write(termo);
    }
}
*/
  
    while (count <= n){
        termo = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = termo;
        count += 1;
    document.write(termo, "<br>");
    
  
}