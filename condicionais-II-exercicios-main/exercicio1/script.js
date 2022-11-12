/*# Exercício 1

Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
Faça isso:
    
1. Utilizando ifs aninhados
```jsx
    if(expressao){
        if(expressao){

        }
    }
```
2. Utilizando um operador lógico para unir duas operações relacionais
```jsx
    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
    }
```
*/


const number = prompt("digite um número qualquer")

// não permite entrada de valores não válidos    
if ( isNaN(Number(number)) || number===""  || (typeof number !="string") ) {

    console.log("você não digitou um número válido!!!")   

    // isNaN = não é possivel convertar para um número válido
    console.log("---Resultado dos Testes --------")
    console.log("resultado do isNaN (Not a Number)",isNaN(Number(number))," = ",Number(number) )

    // number===""  = quando não digita nada e clica no ok
    console.log(`resultado de number ===""`,number==="")

    // typeof number !="string" = quando clica no cancelar retorna um object null
    console.log(`resultado de typeof number !="string"`,typeof number !="string"," = ", typeof number)
    console.log("-------------------------------")

} else { 

    console.log("parte 1")

    //1. Utilizando ifs aninhados

    const objDiv = {
        divPor2: (number%2===0),
        divPor3: (number%3===0)
    }

    if (objDiv.divPor2) {
        if (objDiv.divPor3) {
            console.log(`o número ${number} é divisível por 2 e por 3`)
        } else {
            console.log(`o número ${number} é divisível apenas por 2`)
        }
    } else if (objDiv.divPor3) {
        console.log(`o número ${number} é divisível apenas por 3`)
    } else {
        console.log(`o número ${number} nãe é divisível por 2 nem por 3`)    
    }

    console.log("*".repeat(45))
    console.log("parte 2")
    //2. Utilizando um operador lógico para unir duas operações relacionais

    if (objDiv.divPor2 || objDiv.divPor3){
        if (objDiv.divPor2 && objDiv.divPor3){        
            console.log("o número",number,"é divisível por 2 e por 3")
        } else if (objDiv.divPor2){
            console.log("o número",number,"é divisível apenas por 2")
        } else {
            console.log("o número",number,"é divisível apenas por 3")
        }
    } else {
        console.log("o número",number,"não é divisível por 2 nem por 3")
    }
}
