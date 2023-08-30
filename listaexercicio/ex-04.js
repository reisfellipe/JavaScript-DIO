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

//outra função que calcula desconto

function aplicarDesconto(valor,desconto){
    return (valor - (valor * desconto / 100));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if(formaDePagamento === 3){
    console.log(precoEtiqueta + " Sem juros");
}else{
    console.log(aplicarJuros(precoEtiqueta, 10));
}
console.log(200 * 0.10);
console.log(10 / 100);