let n = parseInt(prompt("Digite um número:"))
for (let i = n; i >0; i--) {
    if (n % i == 0) {
        document.write(i);
    }
}