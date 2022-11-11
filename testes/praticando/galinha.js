/* legenda:
   this = se rerefere a ele mesmo ( internamente )
   a função cria objetos, então onde coloquei this
   vai ser uma propriedade do objeto     
 */

//função que cria a galinha que pôe ovos
function Galinha(nomeGalinha) {
    this.nomeGalinha = nomeGalinha
    this.numOvo = 0
    this.totalOvos=0

    // método botar ovo, ele invoca uma função que é Ovo
    this.ovoBotar=()=>{
        this.numOvo++
        this.totalOvos++
        return new Ovo(this.numOvo,this.nomeGalinha)
    } 
    // função que cria o ovo e anuncia o feito
    function Ovo(numOvo,minhaGalinha) {
        this.clara = "65%",
        this.gema= "35%"
        console.log(`botei o Ovo número ${numOvo}, eu sou a Galinha ${minhaGalinha} `)
    }
}

// utilizando a função para criar as galinhas
// criando as galinahs
const g1 = new Galinha("Labezinha")
const g2 = new Galinha("Luzemelita")

// botando e guardando os ovos na caixa
const caixaDeOvos = [] // caixa 
//                aqui manda botar o ovo galinha 1   
caixaDeOvos.push( g1.ovoBotar() )  
caixaDeOvos.push( g1.ovoBotar() )
//                aqui manda botar o ovo galinha 2
caixaDeOvos.push( g2.ovoBotar() )
        


console.log(`Total de Ovos da galinha ${g1.nomeGalinha} ${g1.totalOvos}`) 
console.log(`Total de Ovos da galinha ${g2.nomeGalinha} ${g2.totalOvos}`) 
console.log( "o ovo é um ",typeof caixaDeOvos[0])       
console.log("conteúdo da caixa de ovos")
console.log(caixaDeOvos)
console.log("----------- o objeto galinha")
console.log(g1)  // galinha 1 
console.log(g2)  // galinha 2  

// de diferente apenas o this ao inves de const ou let
// nesse caso o this fala come se disser assim aqui é uma
// propriedade interna
/*
this.nomeGalinha = nomeGalinha
   se fosse no objeito literal seria
   nomeGalinha: "nomedagalinha"
*/
