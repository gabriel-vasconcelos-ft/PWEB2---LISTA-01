let anosfumados = parseInt(prompt("Digite os anos de fumante"));
let qtdcigarros = parseInt(prompt("Digite a quantidade de cigarros fumados"));
let precocart =  parseInt(prompt("Digite o preço da carteira"));

let precocigarro = precocart/20;
let dias = anosfumados*365;

let calc = dias*qtdcigarros*precocigarro;
document.write("O valor gasto é: R$ " + calc);
