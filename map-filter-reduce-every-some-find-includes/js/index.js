/* ==========================================================================
   map()
   ========================================================================== */

/* Dobrar valores
   ========================================================================== */
   
const numbers = [ 1, 4, 5, 9, 14, 23 ]

//função nomeada
function doubledNumbers(num){
   return num * 2
}
const doubledNumbers3 = numbers.map(doubledNumbers)
//console.log(doubledNumbers3)

// função anônima 
const doubledNumbers1 = numbers.map( function(elem){
   return elem * 2
} )
//console.log(doubledNumbers1)

// arrow function  // mas moderna 
const doubledNumbers2 = numbers.map( num => num * 2 )
//console.log(doubledNumbers2)

const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

const celsius = fahrenheit.map( (elemt) => Math.round( (elemt - 32 ) * 5/9 ))

console.log(celsius)




















