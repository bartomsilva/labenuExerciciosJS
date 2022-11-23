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


/* Temperaturas fahrenheit para celsius 
   ========================================================================== */
   
const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

// expressão de função
const fahrenheitToCelsius = function(e) { 
   return Math.round( (e - 32 ) * 5/9 )}

// função nomeada
function fahrenheitCelsius(e) { 
   return Math.round( (e - 32 ) * 5/9 )}

// arrow function 
const celsius1 = fahrenheit.map( (elemt) => Math.round( (elemt - 32 ) * 5/9 ))

// função anônima
const celsius2 = fahrenheit.map( function (e) { 
   return Math.round( (e - 32 ) * 5/9 )} )

// função nomeada 
const celsius3 = fahrenheit.map(fahrenheitCelsius)

// expressão de função
const celsius4 = fahrenheit.map(fahrenheitToCelsius)


//console.log(celsius1)
//console.log(celsius2)
//console.log(celsius3)
//console.log(celsius3)


/* ==========================================================================
   filter()  // altera o array original  
   ========================================================================== */

/* eliminando valores duplicados
   ========================================================================== */
   
   const meuArray = [ 2,4,5,6,8,9,2,4,9,14,4,5 ]

   const novoArray=meuArray.filter( (elem,index,arr) => arr.indexOf(elem) === index)
   //console.log(novoArray)


   /* ==========================================================================
   reduce()  // ??? rudindo a um total ???
   ========================================================================== */

/* somando valores
   ========================================================================== */
   
   const rockets = [
      {country: "Brasil", launches: 10},
      {country: "Argentina", launches: 1},
      {country: "US", launches: 100}
   ]
   const total1 = meuArray.reduce((prevVal,elem) => prevVal + elem,0) 
   const total2 = rockets.reduce((prevVal,elem) => prevVal + elem.launches,0) 

   //console.log(total1)
   //console.log(total2)


   /* ==========================================================================
   every()  // verificar se todos elementos atendem uma condição? retora booleano
   ========================================================================== */

/* verificando valores
   ========================================================================== */
   
   myArray1 = [ 2,3,5,6,8,9,10]
   myArray2 = [ 2,6,8,10,22,90]

   //console.log(`todos elementos de myArra1 são pares? ${myArray1.every( elem => elem%2 ===0 )}`)
   //console.log(`todos elementos de myArra2 são pares? ${myArray2.every( elem => elem%2 ===0 )}`)

   const family = [
      { id: 01, name: "Bart", age: 55, staus: 1},
      { id: 02, name: "Sandra", age: 48, staus: 1},
      { id: 03, name: "Fran", age: 25, staus: 1},
      { id: 04, name: "Pedro", age: 13, staus: 1},
      { id: 05, name: "Gui", age: 3, staus: 1}      
   ]

   console.log(`todos da lista tem passaporte? ${family.every(e => e.staus ===1)}`)











