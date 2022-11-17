/*
jsx
# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings 
em formato de ranking, como no exemplo abaixo:

//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
``
*/

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// utilizando o for in
console.log("- for in---------------------------------")

for ( let indice in maioresPaises ){
    console.log(`${indice} - ${maioresPaises[indice]}`)
}

// utilizando o for 
console.log("- for -----------------------------------")

for ( let indice = 0 ; indice <  maioresPaises.length ; indice++ ){
    console.log(`${indice} - ${maioresPaises[indice]}`)
}

// utilizando o while 
console.log("- while --------------------------------")

let indice = 0
while( indice < maioresPaises.length ) {
    console.log(`${indice} - ${maioresPaises[indice]}`)
    indice ++
}

// ainda da pra usar o for of - fazendo gambiarra
console.log("- for of na gambiarra-------------------")
let contador = 1
for ( let pais of maioresPaises){
    console.log(`${contador} - ${pais}`)
    contador ++
}




