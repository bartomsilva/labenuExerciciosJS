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

console.log("parte 1")

if ( number%2===0){
    if (number%3===0){
        console.log("o número",number,"é divisível por 2 e por 3")
    } else {
        console.log("o número",number,"não é divisível por 3, apenas por 2")
    }
} else {
    if (number%3===0) { 
       console.log("o número",number,"não é divisível por 2, apenas por 3")
    } else {
        console.log("o número",number,"não é dividido por 2 e 3")
    }
}

console.log("*".repeat(45))
console.log("parte 2")

if (number%2===0 && number%3===0){
    console.log("o número",number,"é divisível por 2 e por 3")
} else {
    if (number%2===0){
        console.log("o número",number,"não é divisível por 3, apenas por 2")
    } else if (number%3===0) {
           console.log("o número",number,"não é divisível por 2, apenas por 3")
    } else {
            console.log("o número",number,"não é dividido por 2 e 3")
    }        
}
