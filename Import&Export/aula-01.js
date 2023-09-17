const entradas = [5,33,14,77,12,133,43];
let i = 0;

 function gets(){
    const valor = entradas[i];
    i++;
    return valor; 
}

 function print(texto){
    console.log(texto);
 }

 //Para exportar

 module.exports = { gets, print };