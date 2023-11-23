var shopping = ["bread", "milk", "cheese", "hummus", "noodles"]
var shop = shopping.map((product)=>{
    return product.replace("bread", "CHANGED")
})

for(let i = 0; i < shopping.length; i++){
    console.log(shop[i])
}


var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ["tree", 795, [0, 1, 2]];

const myArray = ["Auto ajuda", "Psicologia", 19, "inglês", 2004];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
    
}
// console.log(myArray[1])

myArray[1] = "Pizza de chocolate";
// console.log(myArray[1])

myArray.push(sequence[sequence.length - 1])
// console.log(myArray[1][1])