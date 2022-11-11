/////////////////////////////

// moedaBrasil é uma arrow fuction que eu criei, o que ela faz é
// receber dois parâmetros: valor e cifrao
// o valor é o valor que vai receber a formatação incluindo o R$ (da nossa moeda)
// cifrao é um valor booleano que vai definir se quero por o (símbolo de moeda junto ao valor)
// eu não gosto de explicar os comandos porque de certa forma tira um requisito do verdadeiro programador
// que é ( ser curisos e pesquisar e ler documentação ) então se ponho um texto sobre um comando as pessoas
// tendeam a não buscar mais informações, mas vou tentar fazer uma breve descrição ......
/*
if (cifrao)  <- testa se passei o parâmetro cifrao como true, se sim retorna
                o valor junto com o simbolo R$ 
    return valor.toLocaleString = > O método toLocaleString() retorna uma string com uma representação 
                                    sensível a linguagem deste número.
                                    o que fiz foi usar as suas propriedades para dizer que quero no idioma
                                    português Brasil, no estilo moeda, utilizando como moeda "BRL", para 
                                    moedas tem uma tabela, assim como para idiomas, também faz outras 
                                    coisas além de formatar moedas, é necessário infelizmente LER, ler a
                                    documentação não tem outro jeito, se quer de fato aprender sobre
                                    determinado comando.
                                    segue link oficial 
                                    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

    no segundo return não tem o simbolo retornado junto ao valor formatado.
    return valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
    utilizei apenas minimumFractionDigits: 2 <- esta propriedade determina o número mínimo de digitos decimais para garantir que 
                                                o valor não fique sem os centavos, existe também outras propriedades para limitar
                                                o número máximo de decimais maximumFractionDigits, mais detalhes no mesmo link. 
*/
const moedaBrasil=(valor,cifrao)=>{
    if (cifrao)
     return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    //sem R$
    return valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
}


//objeto carrinho - visto na aula
const carrinho = {
    nome: "bart",
    formaDePagamento: "cartão",
    endereco: "rua do futuro, 66 Recife-PE"      
}

// array de objetos adicionado ao objeto carrinho - visto na aula
carrinho.compras = [
    {
        nomeDoProduto: "TV 50 polegadas",
        precoDoProduto: 6000.00,
        quantidade: 1
    },
    {
        nomeDoProduto: "Ventilador 40cm",
        precoDoProduto: 260.00,
        quantidade: 3
    },
    {
        nomeDoProduto: "Sofá gigante",
        precoDoProduto: 2060.00,
        quantidade: 1
    }
]


// como já sabem, dentro de um objeto literal (sim, objeto literal) esse é o 
// nome do objeto que estudamos ontem dia 07/11/2022, porque? 
// Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de null e undefined 
// são tratados como objetos. Eles podem receber propriedades (propriedades atribuídas de alguns tipos não são persistentes),
// e possuem todas as características de objetos.
// como dizia, no objeto literal podemos ter qualquer que tipo de dado dentro dele
// inclindo outros objetos, outros objeitos?
// se uma função é um objeito posso ter uma função dentro do objeito? sim, função um objeto!
//
// adicionando ao objeto uma função para retornar o total das compras
carrinho.totalCompras = function(){
    let totalCompras=0
    for (let count=0; count < this.compras.length; count ++) {
        totalCompras+= this.compras[count].precoDoProduto*this.compras[count].quantidade
    }
    return totalCompras
}
/* mas como essa função funciona?
   ela soma tudo que está no array de compras
   como? utilizaza um loop / laço como falam aqui na labenu
   o laço que utilizei for o for = documentação https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration
   
   mas vamos tentar destrinchar esse loop
 
        |cria contador  |  condição para funcionar   | incremento do contrador   
   for (let count=0     ; count < this.compras.length; count ++) {
        totalCompras+= this.compras[count].precoDoProduto*this.compras[count].quantidade
   }

   por partes 
   let count=0    criar um contador que vai servir de indice para acessar o
                  array que contém os itens do carrinho

   count < this.compras.length  condição para o for continuar, que é enquanto o count
                                for menor que o tamnho do array, assim vai funcionar 
                                até chegar no ultimo indice.

    count ++)       incrementa o contador para que possa acessar o próximo indice

    e dentro do for o que faz?
    vai somando na variavel totalCompras o que foi comprado ( quantidade * valor)
    um detalhe atente para isso ao se referir dentro deu uma função que faz parte
    de um objeto utilizei this,  não sei sinceramente se isso vai ser explicado nesse
    curso, deveria, porque lá fora usa e muito viu.. mas em resumo funciona assim:
    eu digo olha use ISTO de mim mesmo ( no caso do objeto ) é a forma de dizer está
    aqui, comigo, dentro de mim algo assim.
    então quando diz?  this.compras.length  o this faz referência ao próprio objeto.
    revendo tudo que escrevi acho que mexi num vespeiro, espero que o curso ensine 
    isso é muitas coisas mas pra frente não deixa na mão de outros alunos passar 
    informações e nem por conta de cada um por si pesquisar.....                   
*/


console.log("quantidade de compras..:",carrinho.compras.length)
console.log("total das Compras......:",moedaBrasil(carrinho.totalCompras(),true))

// criando o carrinho presente
const carrinhoPresente = {...carrinho}
// modificando as propriedades Nome e Forma de Pagamento
// poderia ser feito na hora cópia do novo objeto
carrinhoPresente.nome="Francy"
carrinhoPresente.formaDePagamento="Cartão Presente"

console.log("\ndados no objeto Carrinho Presente\n")
// imprimindo o nome do novo carinho e forma de pagamento
console.log("Nome..............:",carrinhoPresente.nome)
console.log("Forma de Pagamento:",carrinhoPresente.formaDePagamento)

