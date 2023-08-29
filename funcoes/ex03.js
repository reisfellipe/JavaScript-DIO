//exemplo de funções eficientes para calcular IMC

function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}
function classificarImc(imc){
    if(imc < 18.5){
        return "Abaixo do peso";
    }else if(imc > 18.5 && imc < 25){
        return "Peso normal";
    }else if(imc >= 25 && imc < 30){
        return "Acima do peso";
    }else if(imc >= 30 && imc < 40){
        return "Obseidade";
    }else if(imc >= 40){
        return 'Obesidade grave';
    }
}
//PARA USAR
function main(){
    const peso = 58;
    const altura = 1.69;
    const imc = calcularImc(peso,altura);

    console.log(classificarImc(imc));
}
//chamando a função
main();


//FUNÇÕES INVOCADAS IMEDIATAMENTE: outra forma de criar e executar a função é deixando elas isoladas dentro de ().

(function main(){
    const prim = 10;
    const segu = 1.50;
    const imc = calcularImc(prim,segu);

    console.log(classificarImc(prim,segu));
})();      //DESSA FORMA ELA CRIA E SE EXECUTA. ela só existe dentro dos (), então não sera possível chamar em outro lugar de fora dos ()
