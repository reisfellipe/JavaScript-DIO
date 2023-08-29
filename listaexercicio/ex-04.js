function escrevaMeuNome(nome){
    return (`Meu nome é ${nome}`);
}

function verificarIdade(idade){
    if(idade < 18){
        console.log( 'Você é menor de idade');
    }else{
        console.log(escrevaMeuNome('Fellipe') + " Você é maior de idade");
    }
}
verificarIdade(18);