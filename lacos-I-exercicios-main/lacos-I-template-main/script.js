/* porque separo os exercícios com funções?
   assim não preciso ficar comentando e descomentado
   o código completo, basta comentar a chamda das funções.
*/

//exercicio1()
//exercicio2()
//exercicio3()
//exercicio4()
//exercicio5()
//exercicio6()


// soma dos números
function exercicio1(){

    let numero=null
    let soma=0

    while(true){
        
        numero=Number(prompt(soma===0?"Digite um número:":"Digite mais um número:"+
        "\nou 0 zero para finalizar"))
        
        if ( numero===0 ){ // vai parar quando digitar 0 ou clicar em cancelar
             break // finaliar
        }
        
        if (numero >=1 ) {
            soma += numero
            console.log(`  + ${numero}`)
        } else {
            console.log("Você não digitou um número válido")
        }
    }
    console.log(`---- total é ${soma}`)
}


// contagem até....
function exercicio2() {
    let contagem="-"
    const numero=prompt("Devo contar até quanto?")
    console.log(`vou contar de 0 até ${numero}`)
    for ( let contador=0; contador <= numero ; contador++) {
        contagem += contador+"-"
    }
    console.log(`${contagem}`)
}


// imprimindo numeros de um array e seu índice
function exercicio3(){
    const numeros=[8,12,22,44,55,66,81]
    for( let indice in numeros ) {
        console.log(`índice ${indice} número ${numeros[indice]}`)

    }
}

// acesso só para admin
function exercicio4(){

    let tipoDoUsuario=null
    
    while(true) {
        tipoDoUsuario = prompt(`Digite o Tipo do Usuário 
          A - Administrador
          B - Usuário Comum
          C - Assinante`)
        
        if ( tipoDoUsuario.toUpperCase() ==="A"){
            break
        } else {
            console.log("Acesso negado.")
        }              
    }
    console.log("Boas-vindas, admin!")
}


// tabuada do dois
function exercicio5(){    
   
    console.log("Tabuada do Número 2")
    for ( let numero=1 ; numero <=10; numero ++){
        console.log(`  2 x ${numero} = ${2 * numero}`)
    }
}


// tudo em caixa ALTA
function exercicio6(){
    const aDiversos=['ozemela','cadeira','copo','computador','labenu']
    for ( let item of aDiversos){
        console.log(item.toUpperCase())
    }
}

console.log( nS(1100) )


// apenas numeros inteiros de zero a 999
function nS(numero){
    
    const unidade=["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove"]

    const dezena=["","dez","vinte","trinta","quarenta","cinquenta","sessenta",
                   "setenta","oitenta","noventa"]
    
    const centena=["","cem","duzentos","trezentos","quatrocentos","quinhentos",
                   "seiscentos","setecentos","oitocentos","novecentos"]
    
    const mil=["","mil"] 
    
    // para futuro
    const milhao=["","milhão","milhões"] // future
    const bilhao=["","bilhão","bilhões"] // future
    const trilaho=["","trilhão","trilhões"] // future

    numero = String(numero)
    const tamanho= numero.length
    let indice1=0         
    let indice2=0  
    let indice3=0  
    let indice4=0 
    
    // unidades
    if (tamanho==1) {
        return ( unidade[Number(numero)])
    }

    // indices genéricos para dezenas e centenas......
    indice1=Number(numero[0])
    indice2=Number(numero[1])
    
    // dezenas
    if (tamanho==2 && numero[1]==="0") {
        return (dezena[Number(numero/10)])        
    } else if (tamanho== 2) {
        return (dezena[indice1] + ' e '+ unidade[indice2])
    }
   
    indice3=Number(numero[2])
   
    // centenas
    if (tamanho==3 && numero[1]+numero[2]==="00") {
        return (centena[Number(numero/100)])        
    } else if (tamanho===3) {
        return ( centena[indice1]+ ' e '+ dezena[indice2] + ' e '+ unidade[indice3])
    }

    indice4=Number(numero[3])

    console.log("aqui")
    //milhar
    let result=""

    if (tamanho===4 && numero[0]+numero[1]+numero[2]+numero[3]==="000") {
        return mil[1]
    }

    if (numero[0]==1){  // cem ou cento
        result += mil[1]
        if (numero[1]==1 ){
            if (numero[2]+numero[3]!="00") {
                result += " "+"cento"  // cento
            } else {
                result+= " e "+centena[1] // cem
            }
        } else {
            result += " "+centena[indice2]
        } 
        
    } else { // dois mil pra cima
        result += unidade[indice1]+" "+mil[1]
        
        if (numero[1]==1 ){
            if (numero[2]+numero[3]!="00") {
                result += " "+"cento"  // cento
            } else {
                result+= " e "+centena[1] // cem
            }
        }
           
    } 
   
    return result

}

