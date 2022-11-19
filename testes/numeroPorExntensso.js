
function nExtensso(){
    const numero=Number(document.querySelector("#numero").value)
    if (!eNumber(numero) || numero < 0 || numero > 100){
        document.querySelector("#resposta").innerHTML=`o valor informado = ${numero} não é aceito!`
        return
    }
    const numeroExtensso=nS(numero)    
    console.log(`o número ${numero} é ${numeroExtensso}`)
    document.querySelector("#resposta").innerHTML=numeroExtensso
}

function resetResult()  {
    document.querySelector("#resposta").innerHTML=""
}
    

// apenas numeros inteiros de zero a 999
function nS(numero){
  
    const unidadeD1=["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove",
    "","onze","doze","treze","quatorze","quinze","dezeseis","dezesete","dezoito","dezenove"]

    const dezena=["","dez","vinte","trinta","quarenta","cinquenta","sessenta",
                   "setenta","oitenta","noventa"]
    
    const centena=["cento","cem","duzentos","trezentos","quatrocentos","quinhentos",
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
    // 1 a 9
    if (tamanho==1) {
        return ( unidadeD1[Number(numero)])
    }

    // indices genéricos para dezenas e centenas......
    indice1=Number(numero[0])
    indice2=Number(numero[1])
    
    //////////
    // dezenas        
    //////////

    // 11, 12,13, 14 até 19
    if (tamanho==2 && numero[0]=="1" && numero[1]!="0"){
        return unidadeD1[Number(numero)]        
    }

    /// 10 -20 - 30 - 40 até 90 fechadas
    if (tamanho==2 && numero[1]=="0") {
        return (dezena[Number(numero/10)])
    } 

    // 21 a 99
    if (tamanho==2) {
        return (dezena[indice1] + ' e '+ unidadeD1[indice2])
    }
   
    // aqui conta de 100 a 999
    indice3=Number(numero[2])
    
    // centenas
    // 100, 200 ....900 fechadas
    if (tamanho==3 && numero[1]=="0" && numero[2]=="0") {
        return (centena[Number(numero/100)])        
    }
    // preciso do cento (indice 0) Exemplo: 101 cento e um  
    // 101 102 .... 109
    if (tamanho==3 && numero[0]=="1" && numero[1]=="0") {
        return (centena[0]+ ' e '+ unidadeD1[indice3])
    }
    // 110, 120, 130 - fechado
    if (tamanho==3 && numero[0]=="1" && numero[2]=="0") {
        return (centena[0]+ ' e '+ dezena[indice2])
    }
    // 111 a 119
    if (tamanho==3 && numero[0]=="1" && numero[1]=="1" && numero[2]!="0") {
        return (centena[0]+ ' e '+ unidadeD1[Number(numero[1]+numero[2])])
    }
    // 121..............199
    if (tamanho==3 && numero[0]=="1" && numero[1]!="1" ) {
        return (centena[0]+ ' e '+ dezena[indice2]+" e "+ unidadeD1[indice3])
    }
    // 201, 203, 909
    if (tamanho==3 && numero[0]!="1" && numero[1]=="0" ) {
        return (centena[indice1]+ ' e '+ unidadeD1[indice3])
    }
    //  210.....990
    if (tamanho==3 && numero[0]!="1" && numero[1]!="0" && numero[2]=="0" ) {
        return (centena[indice1]+ ' e '+ dezena[indice2])
    }
    // 211 212 ...219
    if (tamanho==3 && numero[0]!="1" && numero[1]=="1" && numero[2]!="0" ) {
        return (centena[indice1]+ ' e '+ unidadeD1[Number(numero[1]+numero[2])])
    }
    // 221 222 ... 999
    if (tamanho==3 && numero[0]!="1" && numero[1]!="1" && numero[2]!="0" ) {
        return (centena[indice1]+ ' e '+ dezena[indice2] + " e "+unidadeD1[indice3])
    }     

}
