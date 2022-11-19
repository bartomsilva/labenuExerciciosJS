let numero=0
while(true){
    
    numero=prompt(`Digite um número entre ( 0 e 100 )
                    para finalizar digite 00`)
    
    if(numero=="00") break

    console.log( `${numero} por extenso é ${nS(numero)}`)
}

function nExtenso(){
    const numero=Number(document.querySelector("#numero").value)
    if (!eNumber(numero) || numero < 0 ){
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
    
                   
    // para futuro
    const mil=["","mil"] 
    const milhao=["","milhão","milhões"] // future
    const bilhao=["","bilhão","bilhões"] // future
    const trilhao=["","trilhão","trilhões"] // future

    numero = String(numero)
    const tamanho= numero.length
 

    const indice1=Number(numero[0])
    const indice2=Number(numero[1])
    const indice3=Number(numero[2])
    const indice4=Number(numero[3])
    
    
    if (tamanho==1) {return Unidade(numero)}
    if (tamanho==2) {return Dezena(numero)}
    if (tamanho==3) {return Centena(numero)}
    if (tamanho==4) {return Milhar(numero)}
    
    
    ////////////////////
    // trata da UNIDADES
    ////////////////////
    // [0]       
    function Unidade(numero) {
        return (unidadeD1[Number(numero)])
    }

    ////////////////////
    // trata das DEZENAS
    ////////////////////
    // [0][1]
    function Dezena(numero) {         
        // 11, 12,13, 14 até 19
        if (numero[0]=="1" && numero[1]!="0"){
            return unidadeD1[Number(numero)]        
        }

        /// 10 -20 - 30 - 40 até 90 fechadas
        if (numero[1]=="0") {
            return (dezena[Number(numero/10)])
        } 
        // 21 a 99
           return ( dezena[indice1] + ' e '+ Unidade(indice2) )
    }


    ////////////////////
    // trata as CENTENAS
    ////////////////////
    // [0][1][2]
    function Centena(numero){  
        // [0][1][2]  
        // 100, 200 ....900 fechadas
        if (numero[1]+numero[2]=="00") { 
            return (centena[Number(numero/100)])
        }        
        // 101 102 .... 109
        if (numero[0]=="1" && numero[1]=="0") {
            return (centena[0]+ ' e '+ Unidade(indice3))
        }
        // 110, 120, 130 - fechado
        if (numero[0]=="1" && numero[2]=="0") {
            return (centena[0]+ ' e '+ dezena[indice2])
        }
        // 111 a 119
        if (numero[0]=="1" && numero[1]=="1" && numero[2]!="0") {
            return (centena[0]+ ' e '+ unidadeD1[Number(numero[1]+numero[2])])
        }
        // 121..............199
        if (numero[0]=="1" && numero[1]!="1" ) {
            return (centena[0]+ ' e '+ dezena[indice2]+" e "+ unidadeD1[indice3])
        }
        // 201, 203, 909
        if (numero[0]!="1" && numero[1]=="0" ) {
            return (centena[indice1]+ ' e '+ unidadeD1[indice3])
        }
        //  210.....990
        if (numero[0]!="1" && numero[1]!="0" && numero[2]=="0" ) {
            return (centena[indice1]+ ' e '+ dezena[indice2])
        }
        // 211 212 ...219
        if (numero[0]!="1" && numero[1]=="1" && numero[2]!="0" ) {
            return (centena[indice1]+ ' e '+ unidadeD1[Number(numero[1]+numero[2])])
        }
        // 221 222 ... 999
        if (numero[0]!="1" && numero[1]!="1" && numero[2]!="0" ) {
            return (centena[indice1]+ ' e '+ dezena[indice2] + " e "+unidadeD1[indice3])
        }   
    }  

    function Milhar(numero){
        // [0][1][2][3]
        let result = Unidade(numero[0])

        // 1000...2000...9000 fechados
        if (numero[1]+numero[2]+numero[3]=="000") {
            if (numero[0]=="1") {
                return mil[1] 
            } else {
                return ( result+" "+mil[1])
            }
        }
        
        return "em desenvolvimento"

       
    }

}
