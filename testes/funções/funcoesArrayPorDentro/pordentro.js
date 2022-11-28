
// novo array com os valores multiplicados por 2
// novo array com os valores divididos por 2


const numeros = [1, 2, 3, 4, 5, 6]

function myMap(arr, func) {
    const newA= []
    for (const index in arr) {
        newA.push(func(arr[index]))      
    }
    return newA
}




console.log("map js",numeros.map( e => e * 2)


console.log("meu map",myMap(numeros, e => e * 2))








