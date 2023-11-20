// troque todos os elementos pares e diferentes de zero de um array pelo numero 0. Se o array for vazio, retorne -1.
/*
const numbers = [1,3,4,6,80,33,23,90];

const evenEmpty = numbers.filter((number)=>{   
    if(number / 2 === 0 || number !== 0) {
        return 0
    } 
    if(number === null){
        return -1
    }
})

console.log(evenEmpty)
*/

 function replaceEven(string){
    if(!string.length)return -1


    for(let i = 0; i < string.length; i++) {
        if(string[i] === 0) {
            console.log("Você já é ZERO");
        }else if ( string[i] % 2 === 0) {
            console.log(`Substituindo ${string[i]} por 0...`)
            string[i] = 0;
        }
    }
    return string;
 }

 let arr = [1,3,4,6,80,33,23,90];
 console.log(replaceEven(arr))