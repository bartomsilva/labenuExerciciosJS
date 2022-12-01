


function meuFilter(arr, callback){
    const arrRetorno=[]
    for(const index in arr){
        if( callback( arr[index] ) ){
            arrRetorno.push( arr[ index ])
        }
    }
    return arrRetorno
}







// um filter manual
numeros = [ 2 , 4, 9, 5,12, 8, 10, 0, 2]
let arrRetorno=[]
for(const index in numeros){
    if( numeros[index] %2 ===0 ) {
        arrRetorno.push( numeros[index] )
    }
}
//console.log(arrRetorno)

arrRetorno = numeros.filter( e => e%2 == 0 )
//console.log(arrRetorno)

