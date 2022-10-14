let n = parseInt(prompt("Informe seu numero"));
let teste = true;

if (n!=1) {

    for(let i=2; i<=n/2; i++){

        if (n%i==0) {
            teste = false;
        }
    }

}

if (teste && n!=1){
    document.write("Seu número é primo.");

} else {
    document.write("Seu número não é primo.");
}