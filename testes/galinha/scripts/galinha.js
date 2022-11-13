/* legenda:
   this = se rerefere a ele mesmo ( internamente )
   a função cria objetos, então onde coloquei this
   vai ser uma propriedade do objeto     
 */

   
const minhasGalinhas = [] 
const caixaDeOvos = []  
const imagemGalinha = "./assets/galinha.png"
let numeroDaGalinha=0


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
        this.gema= "35%",
        this.nomeGalinha=minhaGalinha,
        this.numOvo=numOvo
        console.log(`${minhaGalinha} botei o Ovo número ${numOvo} `)
    }
}

const botarOvo=(e)=>{
    // identifica a galinha
    const galinha = e.getAttribute("id").substring(1)
    // manda a galinha botar o ovo e poe na caixa
    caixaDeOvos.push( minhasGalinhas[galinha-1].ovoBotar())
}

const criarGalinha=()=>{
    //incrementa o contador de galinhas ( atualziar o Dom )
    numeroDaGalinha++

    let nomeDaGalinha="galinha"+numeroDaGalinha
    let novaDiv = document.createElement("div")
    let novaimg = null

    // adiciona a nova galinha 
    let mgalinha = new Galinha(nomeDaGalinha)
    minhasGalinhas.push(mgalinha)  
    
    novaDiv.setAttribute('class',nomeDaGalinha)   
    novaDiv.setAttribute('onclick','botarOvo(this)')    
    novaDiv.setAttribute('id','g'+numeroDaGalinha)                
    document.querySelector('.galinhas').appendChild(novaDiv)
                    
    novaimg = document.createElement("img");
    novaimg.setAttribute('src',imagemGalinha)
    document.querySelector("#g"+numeroDaGalinha).appendChild(novaimg)
}

//primeira galinha
criarGalinha()


function abrirCaixaOvos(){
    console.log(caixaDeOvos)
}

        

