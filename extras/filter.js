
const numbers = [2, 3, 4, 5, 6, 8, 9, 0]

result = numbers.filter(number => number % 2 != 0)
//console.log("impares", result)



// filter e Map manual - By Bart
// ainda bem que temos o MAP e o filter
function filterMap(arr, fCb) {
    const newArray = [] // novo array a ser retornado
    for (const index in arr) {
        /* 
        percorre o Array e utiliza a função callback para 
        preparar o retorno, se o retorno é booleano retona o valor
        contido no elemento se é diferente de booleano adiciona o resultado.        
        */
        const result = fCb(arr[index]) // retorno da função de callback
        if (result || result ==0) { // se obteve um resultado
            if (typeof result == "boolean") {  // sendo booleano armazer o conteúdo do elemento
                newArray.push(arr[index])
            } else {  // não sendo booleano armazea no resuldado da expressão
                newArray.push(result)
            }
        }
    }
    return newArray // retorna o novo array    
}
//exemplos:
console.log("Filter Manual",filterMap(numbers, (a) => a % 2 == 0))
console.log("Map Manual",filterMap(numbers, (a) => a ** 2))

// com map e filter mais simples

console.log("Filter Js",numbers.filter((a) => a % 2 == 0))
console.log("Map Js",numbers.map((a) => a ** 2))
