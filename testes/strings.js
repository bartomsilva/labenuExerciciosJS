// rodando comandos JavaScript dentro do HTML 
// apenas para título de exemplo.

// strings podemos utilizar:
// - aspas duplas " texto "
// - aspas simples ' texto '
// - acento grave ` texto `

// exeplos de variáveis contendo strings

// declarando as variáveis
const nome = "Braian"
const sobreNome = "Adams"
const userName = `braianadams`

// verificando os tipos
console.log("Imprimindo os tipos das variáveis criadas")
console.log("o tipo da variável nome é...... :",typeof nome)
console.log("o tipo da variável sobreNome é. :",typeof sobreNome)
console.log("o tipo da variável userName é.. :",typeof userName)

// o que alinha a baixo faz? repete a string na quantidade
// que for indicada dentro do método repeat()
console.log(".".repeat(40))

console.log("utilizando template strings........")
console.log(`meu nome é ${nome} e meu username é ${userName}`)
console.log(".".repeat(40))

// vamos fazer concatenação utilizando o sinal de +
console.log("meu nome é "+nome+" e meu user name é "+userName)
console.log(".".repeat(40))

// para utilizar aspas duplas ("") ou simples ('') junto ao texto
// é preciso utilizar o caractere \ antes da primeira e da segunda aspa
// como assim? veja o exemplo.
//                            
//let meuTexto ="Eu quero usar "aspas" dentro do meu texto"
// se colocar como está acima ai dar erro no código, observe como deve fazer...
let meuTexto ="Eu quero usar \"aspas\" dentro do meu texto"
// utilizando a \ (barra) antes das aspas fica tudo ok.
console.log(meuTexto)

console.log(".".repeat(40))

// se precisar quebrar linhas utilize \n (isso diz o JavaSript pra quebrar a linha)
console.log("agora o mesmo texto quebrando a linha")
meuTexto ="Eu quero usar \"aspas\" \ndentro do meu texto"
console.log(meuTexto)

// segunda parte 

console.log(".".repeat(40))
// a propriedade length retorna a quantidade de caracteres de uma string
// inclusive espaços em branco e o número de elementos de array

console.log("a variável nome tem "+nome.length+" caracteres e são eles "+nome)

console.log(".".repeat(40))

// transformando strings em maiusculas e minusculas
// utilizando os métodos toUpperCase()  e toLowerCase() 

const frase="OieEeEee!"
console.log("a frase "+frase+" para toda maiuscula "+frase.toUpperCase())
console.log("a frase "+frase+" para toda minusculas "+frase.toLowerCase())
console.log(".".repeat(40))

// removendo espaços no inicio e no fim de uma string

const email ="    amanda@gmail.com    "
console.log("email "+email)
console.log("veja que a variável email tem "+email.length+" caracteres")
console.log("removendo os espaços fica com "+email.trim().length+" caracteres")
// o que foi feio acima.... utilizei o trim para primeiro remover os espaços
// depois pedi o tamanho da variável email já sem espaços

console.log(".".repeat(40))

// subistituindo partes do texto dentro de uma string
// podemos subistituir com os métodos
// replace() que substitui a primeira ocorrência ou
// replaceAll que substitui todas ocorrências 

const minhaFrase= "hoje eu comi, cuscuz com ôvo, eu adoro cuscuz"
// na frase acima vamos trocar o cuscuz por arroz
console.log(minhaFrase)  // frase sem alteração
console.log(minhaFrase.replace("cuscuz","arroz"))  // trocando a primeira ocorrência de cuscuz por arroz
console.log(minhaFrase.replaceAll("cuscuz","arroz"))  // trocando todas ocorrências de cuscuz por arroz

console.log(".".repeat(40))

// para saber se um caractere ou um conjunto de caracteres está incluído em uma 
// string utilizamos o método includes() ele retorna um valor boleano
// true se encotrou ou false se não encontrou

const minhaNovaFrase= "eu gosto de estudar, eu serei um dev full stack"
console.log("tem a palavra: não ?",minhaNovaFrase.includes("não"))
console.log("tem a palavra: full ?",minhaNovaFrase.includes("full"))


////////
////
//// CONTEÚDO DOS SLIDES 
////
///////
// vamos criar um programa para pedir nome e cor farorita

const pessoa  = prompt("Insira o seu nome 1:")
const cor = prompt("Insira sua cor favorita:")

// vamos imprimir a frase: A cor favorita de pessoa é cor 
console.log("A cor favorita de "+pessoa+" é "+cor) // utilizando concatenação
console.log(`A cor favorita de ${pessoa} é ${cor}}`) // utilizando Template Strings 

// imprimindo a citação entre aspas
const citacao = prompt("digite sua citação favorita")
console.log(`citação favorita \"${citacao}\"`)

console.log("Imprimindo o nome da pessoa em letras maiusculas")
console.log(`A cor favorita de ${pessoa.toUpperCase()} é ${cor}`) // utilizando Template Strings Nome em Maiusculas

console.log("Imprimindo o numero de caracteres do nome da pessoa")
console.log(`o nome ${pessoa.toUpperCase()} tem ${nome.length} strings`) // número de strings do nome

console.log("verificando se o nome da pessoa tem a letra A ",pessoa.toUpperCase().includes("A"))

////////
////
//// pra guardar na cabeça
////
////////
const nomeUser = prompt("Digite seu nome 2")
const eMail = prompt("Digite seu email")

// montando em uma variável a frase a ser impressa
let fraseCriada = `O e-mail ${eMail} foi cadastrado com sucesso. Boas Vidas, ${nomeUser}`
console.log(fraseCriada)

// alterando a frase para incluir o número de caracteres através da concatenação
fraseCriada += ` tem ${nomeUser.length} caracteres` 
console.log(fraseCriada)

// substituindo todas letras R na frase criada por L
console.log("substituindo todas as letras R na frase por letras L")
const novafrase = fraseCriada.replaceAll("r","l") // utilizando o metódo replaceAll()

console.log(novafrase)
// verificando se o email contém o símbolo @
console.log("o email contém @ ",eMail.includes("@"))

//
const priMaiuscula=(minhaString)=>{
    const primeiraLetra=minhaString[0].toUpperCase()
    const resto=minhaString.substring(1).toLowerCase()
    return primeiraLetra+resto
}

const priMaiusculaAll = (minhaString) => {
    let sW = minhaString.trim().toLowerCase()
    let troca = false
    let novaString=""
    novaString = sW[0].toUpperCase()
    for (let count = 0; count < sW.length; count++) {
      if (sW[count] == " ") {
        novaString += sW[count]
        troca = true
      } else if (troca) {
        novaString += sW[count].toUpperCase()
        sW[count] = sW[count].toUpperCase()
        troca=false
      } else if (count > 0 ) {
        novaString += sW[count]
      }
    }
    return novaString
  }
  console.log(priMaiusculaAll("ozemela top das galaxias"))

