function x(nparcelas, carrinho) {    
    // número de cursos
    const nCursos=carrinho.length

    // no ternário inicializo com 20% ou 0
    let desconto = nparcelas < 3 ? 20 : 0

    // no ternário adiciono 15% / 10% ou 0 
    nCursos===3 ? desconto +=15 : nCursos===2 ? desconto+=10 : 0

    // e para somar? poderia utilizar o for / for in / foi of
    // tem o método reduce(),mas tem o velho jeitinho kkk
    let valorTotal=0
    carrinho.map(e => valorTotal += e)
    
    //fixando duas casas decimais
    valorTotal = valorTotal.toFixed(2)

    // separando desconto / valor líquido já com descontos (das decimais)
    const valorDoDesconto = (valorTotal*(desconto/100)).toFixed(2)
    const valorLiquido= (valorTotal - valorDoDesconto).toFixed(2)
    
    // valor de cada parcela fixado em duas casas decimais
    const valorDaParcela=(valorLiquido/nparcelas).toFixed(2)

    // impressão dos dados para análise
    console.log(`Valor Total.........R$: ${valorTotal}`)
    console.log(`Valor do Desconto...R$: ${valorDoDesconto}`)
    console.log(`Valor Líquido.......R$: ${valorLiquido}`)
    console.log(`Número de Parcelas....: ${nparcelas}`)
    console.log(`Valor das Parcela.R$..: ${valorDaParcela}`)
    console.log(`Número de Cursos......: ${nCursos}`)
    console.log(`Percentual de Desconto: ${desconto}%`)
}

// chamada de teste
x(1, [100,100,100])


