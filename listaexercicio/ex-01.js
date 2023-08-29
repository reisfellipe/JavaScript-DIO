const nota1 = 5;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if(media < 5){
    console.log("REPROVADO")
}else if(media >= 5 && media < 7){
    console.log("RECUPERAÇÃO")
}else{
    console.log("APROVADO")
}