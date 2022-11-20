

let jogar=""    // PERGUNTA
let numChut=0   // número chutado
let numTent=0   // número de tentativas
// uso do jogador computador
let numSecreto= 0  // 1 a 100

while(true) {  

   jogar=prompt(`Você quer Adivinhar meu número?
               >>> digite S para Sim <<<
         >>ou qualquer outra coisa para não <<`)
   // jogar = mull = objetct
   if (typeof jogar =="object" ) {break} 
   
   jogar = jogar.toUpperCase()
   
   if (jogar!="S") {
      console.log("Que pena!, fica para próxima.")
      break
   }

   numTent = 0 // reset
   // rest = gerar um número aleatório ente 1 e 100
   numSecreto = Math.floor(Math.random() * 10 + 1 ) 
   //                  >>> aqui alterar de 10 para 100        
   console.log("Vamos jogar então!")
   while(true) {
      
      numChut=prompt("Qual é seu palpite?")
      if (typeof numChut =="object") {continue}  // cancelar             
      
      numChut = Number(numChut)
      // j = Number(numChut) = NaN não é um número
      // "" = Number(numChut) = 0
      if (!numChut>=1) {continue}

      console.log(`seu palpite foi: ${numChut}`)
      numTent ++

      if (numChut != numSecreto) {
         console.log(`infelizmente você errou, é ${numChut<numSecreto?"maior!":"menor!"} `)
      } else {
         console.log(`Meus parabéns, ACERTOU!!!`)
         break
      }
   }
   console.log(`o número de tentativas foi ${numTent}`)
}