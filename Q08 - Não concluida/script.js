let NT1 = parseInt(prompt("Digite a 1ª Nota:"));
let NT2 = parseInt(prompt("Digite a 2ª Nota:"));
let NT3 = parseInt(prompt("Digite a 3ª Nota:"));
let NT4 = parseInt(prompt("Digite a 4ª Nota:"));
let NT5 = parseInt(prompt("Digite a 5ª Nota:"));

let media = (NT1+NT2+NT3+NT4+NT5)/5

if (NT1>=7 && NT2>=7 && NT3>=7 && NT4>=7 && NT5>7){
    document.write("Passou em todos os exames. Média: " + media);
}
else if (NT1>=7 && NT2>=7 && NT3<7 && NT4>=7 && NT5<7){
    document.write("Passou em I, II e IV, mas não em III ou V. Média: " + media);
}
else if (NT1>=7 && NT2>=7 && NT3>=7 && NT4>=7 && NT5<7){
    document.write("Passou em I e II, III ou IV, mas não em V. Média: " + media);
}
else{
    document.write("Reprovado. Média: " + media);
}