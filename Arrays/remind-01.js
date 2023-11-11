function inicio(){
    vetor = [1,2,3,4,5,6]
    numero = 0;
    logico = false;

    for(vetor[index] = 0;index < 5; index++){
        if(vetor[index] == numero){
            console.log("Encontrado na posição: ", index)
            logico = true;
        } else {
            console.log("O numero não está no vetor")
        }
    }
}

console.log(inicio())