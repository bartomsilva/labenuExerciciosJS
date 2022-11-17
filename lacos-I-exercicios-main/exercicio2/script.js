
/*

# Exercício 2

Crie um programa que peça um input de número para o usuário. 
Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
*/

// rotina em loop para interagir com o usuário
// embora o exercício não pede é bom ir agregando
// os conhecimentos passados ao novos exercício
// não utilizei nada que não foi dado ainda.

// utilizei aqui o loop while 
let numero = null    // variável que vai receber o número da tabuada ou 0
                     // para interromper o loop while
while (numero!=0) {

    numero=Number(prompt(`T a b u a d a: 
                 Selecione um número entre 1 e 10
                 para sair, click em Ok sem digitar nada
                 ou simplesmente click em Cancelar!`))

    // chama a função de validação (a função está no final do código)
    // range válido 0 a 10 ( zero é a condição de saída )
    if (!numValido(numero)){    
        console.log("você não digitou um número válido")
    
    // teste da condição de saída do loop    
    } else if (numero ===0 ){  
        console.log("até logo!!!")
        
    // chama a função que vai imprimir a tabuada 
    } else {
        imprimeTabuada(numero) 
    }
}

// função que executa a impressão da tabuada
// recebe por parâmetro ( numero ) que corresponde
// a qual tabuada deverá ser impressa
function imprimeTabuada(numero){
    const numeros = [1,2,3,4,5,6,7,8,9]     // contém os números para multiplicar
    console.log("Tabuada do",numero),"\n"   // título da tabuada
    for (let num of numeros ){              // loop for of 
        console.log(`  ${numero} x ${num} = ${numero * num} ` )
    }
}

//função que valida o range de 0 a 10
// 0 é a condição de saída do loop
// de 1 até 10 são as tabuadas válidas
function numValido(num){
    if (num >= 0 && num <= 10 ) {
        return true // valida o número 
    }
    return false    // invalida o número
}