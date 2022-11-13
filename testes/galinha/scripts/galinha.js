/* legenda:
   this = se rerefere a ele mesmo ( internamente )
   a função cria objetos, então onde coloquei this
   vai ser uma propriedade do objeto     
 */

   
const minhasGalinhas = []   // lista de galinhas
const caixaDeOvos = []      // lista de ovos
const imagemGalinha = "./assets/galinha.png"   // imagem da galinha
const imagemOvo = "./assets/ovo.png"           // imagem do ovo
let numeroDaGalinha=0  // numerar as galinhas


//função construtora que cria a galinha que pôe ovos
function Galinha(nomeGalinha) {
    this.nomeGalinha = nomeGalinha   // nomeGalinha: nomeGalinha,
    this.numOvo = 0                  // numOvo: 0,
    this.totalOvos=0                 // totalOvos: 0

    // método botar ovo, ele invoca uma função que é Ovo
    this.ovoBotar=()=>{
        this.numOvo++
        this.totalOvos++
        return new Ovo(this.numOvo,this.nomeGalinha)
    } 
    // função construtora que cria o ovo e anuncia o feito - cria o objeto ovo
    function Ovo(numOvo,minhaGalinha) {
        this.clara = "65%",             // clara: "65%"
        this.gema= "35%",               // gema: "35%"
        this.nomeGalinha=minhaGalinha,  // nomeGalinha: minhaGalinha
        this.numOvo=numOvo              // numOvo: numOvo 
        this.nomeDoOvo="ovo"+"-"+numOvo+"-"+minhaGalinha  // nomeDoOvo: "ovo"+"-"+numOvo+"-"+minhaGalinha
    }
}

// função que manda a gainha por o ovo e é responsável por criar o visual dos ovos
const botarOvo=(obj)=>{
    
    let novaimg = null
    let novaDiv = document.createElement("div")
    // identifica a galinha
    const galinha = obj.getAttribute("id").substring(1)
    // manda a galinha botar o ovo e poe na caixa
    const oVo = minhasGalinhas[galinha-1].ovoBotar()
    const nomeDoOvo="ovo"+"-"+oVo.numOvo+"-"+oVo.nomeGalinha

    caixaDeOvos.push(oVo) // guarda o ovo na caixa

    novaDiv.setAttribute('onclick','criarGalinha(this)')  
    novaDiv.setAttribute('id',nomeDoOvo)                
    document.querySelector('.caixaDeOvos').appendChild(novaDiv)
                    
    novaimg = document.createElement("img");
    novaimg.setAttribute('src',imagemOvo)
    document.querySelector("#"+nomeDoOvo).appendChild(novaimg)
}

const criarGalinha=(origem)=>{
    //incrementa o contador de galinhas 
    numeroDaGalinha++

console.log("origem",origem)

    const nomeDaGalinha="g"+numeroDaGalinha
    let novaimg = null
    let novaDiv = document.createElement("div")

    // adiciona a nova galinha 
    let galinha = new Galinha(nomeDaGalinha)
    minhasGalinhas.push(galinha)  
    
    novaDiv.setAttribute('onclick','botarOvo(this)')  
    novaDiv.setAttribute('id',nomeDaGalinha)                
    document.querySelector('.galinhas').appendChild(novaDiv)
                    
    novaimg = document.createElement("img");
    novaimg.setAttribute('src',imagemGalinha)
    document.querySelector("#"+nomeDaGalinha).appendChild(novaimg)
}


//primeira galinha
criarGalinha()


function abrirCaixaOvos(){
    console.log(caixaDeOvos)
}

        

