// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // sem usar reverse() 
    const newArray=[]
    for (let index=array.length-1 ; index>=0; index -- ){
        newArray.push(array[index])
    }
    array=newArray
    return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // sem usar o sort()
    let valAux=0
    for(let i1 in array){
        for(let i2 in array){
            if(array[i1] > array[i2]){
                valAux=array[i2]
                array[i2]=array[i1]
                array[i1]=valAux
            }
        }        
    }
    return array  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    //sem usar o filter()
    const newArray=[]
    for(const value of array){
        if (value%2===0) newArray.push(value)
    }
    return newArray  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    // FILTER E MAP 
    const newArray=array.filter(e => e%2===0).map( e => e**2)
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const obj={}
    if (num1 > num2 ){
        obj.maiorNumero=num1
        obj.maiorDivisivelPorMenor= num1%num2===0
        obj.diferenca=num1-num2
    } else {
        obj.maiorNumero=num2
        obj.maiorDivisivelPorMenor= num2%num1===0
        obj.diferenca=num2-num1           
    }
    return obj
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}