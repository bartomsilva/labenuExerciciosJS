
// guardo a sigla da etapa selecionada para 
// pesquisar na tabela
let etapaSelecionada=null

// considero as categorias 1, 2, 3 e 4 como indice
// assim anulo o indice 0
const tabelaDePrecos=[
    {
        etapa: "SF",
        vCat: [0,1320,880,550,220]
    },       //0  1    2   3   4 
    {
        etapa: "DT",
        vCat: [0,660,440,330,170]
    },
    {
        etapa: "FI",
        vCat: [0,1980,1320,880,330]
    } 
] 
// a variável sair serve para controlar a saida do while quando 
// digitar 0 ou clicar em cancelar
let sair=1
while(sair!=0){ // entra de cara porque sair está valendo 1

    const nomeDoCliente=prompt("Digite o Nome do Cliente")
 // NaN
 // null objetct Number = 0  
    if (Number(nomeDoCliente)!=0) {  // se digitar zero o clicar em cancelar não entra aqui       
        // funções para cada ação necessária 
        const tipoDeJogo=selecionarTipoDeJogo()
        const etapa=selecionarEtapa()
        const categoria=selecionarCategoria()
        const quantidadeDeIngressos=selecionarQuantidadeDeIngressos()
        
        // aqui faz a impressão do resultado da compra
        resumo(nomeDoCliente,tipoDeJogo,etapa,categoria,quantidadeDeIngressos)
    } else {
        sair = 0 // para finaliar o while sair recebe valor 0
    }
}

// TIPO DE JOGO ( IN indica internacional e DO indica doméstico )
function selecionarTipoDeJogo(){
    let tipo=null
    while(true){ // loop infinito macete antigo 1983
        tipo=prompt(`Informe o tipo do jogo:
                       IN = internacional
                       DO = doméstico`).toUpperCase()
        switch(tipo){
            case "IN" : 
                return "Internacional"
            case "DO" :
                return "Nacional"
            default :
                console.log("Digite um tipo válido!!!")
        }          

    }
}

// ETAPA
function selecionarEtapa(){
    let etapa=null
    while(true){ // loop infinito macete antigo 1983
        etapa=prompt(`Digite a Etapa desejada:
                        SF = semi-final; 
                        DT = decisão de terceiro lugar 
                        FI = final`).toUpperCase()

        etapaSelecionada = etapa // aqui guardo a sigla para pesquisar na tabela de preços

        switch(etapa){
            case "SF" :                
                return "Semifinal"
            case "DT" :
                return "Decisão de Terceiro Lugar"
            case "FI" :
                return "Final"
            default :
                console.log("Digite uma Etapa válida!!!")
        }
    }
}

// CATEGORIA
function selecionarCategoria(){
    let categoria=null
    while(true){ // loop infinito macete antigo 1983
        categoria=Number(prompt(`Digite a categoria:
                1 - Categoria 1
                2 - Categoria 2
                3 - Categoria 3
                4 - Categoria 4`))
        if (categoria >=1 && categoria <= 4) {
            return categoria
        }
        console.log("digite uma categoria válida!!!")
    }
}

// QUANTIDADE DE INGRESSOS
function selecionarQuantidadeDeIngressos(){
    let quantidade=null
    while (true){ //loop infinito macete antigo 1983
        quantidade=Number(prompt("Digite quantos ingressos deseja:"))
        if (quantidade >= 1) {
            return quantidade
        }
        console.log("quantidade inválida!!!") // não limitei o máximo       
    }
}

// IMPRESSÃO DO RESUMO DA COMPRA

function resumo(nomeDoCliente,tipoDeJogo,etapa,categoria,quantidadeDeIngressos){
    let valorDoIngresso=null // vai ser pesquisado na tabela de preços
    let valorTotal=null // total da compra 
    let simbolo="R$" // se for identificado internacional ele muda mais abaixo
    
    console.log('\n---Dados da Compra---')
    console.log(`Nome do Cliente: ${nomeDoCliente.toUpperCase()}`)
    console.log(`Tipo de jogo: ${tipoDeJogo}`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de Ingressos: ${quantidadeDeIngressos} ingresso(s)`)
    console.log("---Valores---")
    
    // pesquisando na tabela de preços o valor do ingresso pela etapa e categoria
    valorDoIngresso = tabelaDePrecos.find( e => e.etapa === etapaSelecionada) 
    valorDoIngresso = valorDoIngresso.vCat[categoria] // pegando o valor do ingresso na tabela

    // se o jogo for internacional muda o simbolo e multiplica pelo
    // valor do dolar estabelecido no exercício 4.10
    if (tipoDeJogo=="Internacional"){
        simbolo="US$"
        valorDoIngresso *= 4.10
    }
    // calculo do valor total
    valorTotal = quantidadeDeIngressos * valorDoIngresso

    console.log(`Valor do Ingresso: ${simbolo} ${valorDoIngresso.toFixed(2)}`)
    console.log(`Valor Total ${simbolo} ${valorTotal.toFixed(2)}`)
    console.log(".................................")

}

// fim


     

