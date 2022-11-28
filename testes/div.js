
/*  para ajudar nas ideias 
    essa função faz exatamento o que o nome diz:
    parcelamento de curso...
    regras:
    o DESCONTO é composto por:
        * pagamento em até 2 vezes 20%
        * se no carrinho tiver 2 cursos ganha mais 10%
        * se no carrinho tiver 3 cursos ganha mais 15%
 */
////// TIPO: FUNÇÃO NOMEADA pode ser outro tipo "como achar melhor"
function parcelarCurso(nParcelas, carrinho) {    
    // número de cursos
    const nCursos=carrinho.length

    // no ternário inicializo com 20% ou 0
    let percDesconto = nParcelas < 3 ? 20 : 0

    // no ternário adiciono 15% / 10% ou 0 
    nCursos===3 ? percDesconto +=15 : nCursos===2 ? desconto+=10 : 0

    // e para somar? poderia utilizar o for / for in / for of
    // tem o método reduce(), mas tem o velho jeitinho kkk
    let valorTotal=0
    carrinho.map(e => valorTotal += e)
    // similar com ( for of ) seria
    // for(valor of carrinho) valorTotal += valor

    //fixando duas casas decimais
    valorTotal = valorTotal.toFixed(2)

    // separando desconto / valor líquido já com descontos (das decimais)
    const valorDoDesconto = (valorTotal*(percDesconto/100)).toFixed(2)
    const valorLiquido= (valorTotal - valorDoDesconto).toFixed(2)
    
    // valor de cada parcela fixado em duas casas decimais
    const valorDaParcela=(valorLiquido/nParcelas).toFixed(2)

    // impressão dos dados apenas para análise
    // dai você monta a frase pedida no enunciado

    console.log(`Valor Total.........R$: ${valorTotal}`)
    console.log(`Valor do Desconto...R$: ${valorDoDesconto}`)
    console.log(`Valor Líquido.......R$: ${valorLiquido}`)
    console.log(`Número de Parcelas....: ${nParcelas}`)
    console.log(`Valor das Parcela.R$..: ${valorDaParcela}`)
    console.log(`Número de Cursos......: ${nCursos}`)
    console.log(`Percentual de Desconto: ${percDesconto}%`)
}

// chamada de teste
parcelarCurso(1, [100,100,100])



