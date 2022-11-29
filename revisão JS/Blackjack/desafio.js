// declaração das variáveis
let usLetter = []
let pcLetter = []
let usPoints = []
let pcPoints = []

// iniciando o Jogo
while (true) {

   const resp = confirm("Olá, esse é BLACKJACK do Bart" +
      "\nDeseja iniciar uma nova rodada?")
   if (!resp) break

   // resetando cartas e pontos
   resetGame()
   
   // sorteio das cartas iniciais 
   while (true) {

      usLetter[0] = comprarCarta()
      usLetter[1] = comprarCarta()

      pcLetter[0] = comprarCarta()
      pcLetter[1] = comprarCarta()

      if (usLetter[0].texto + usLetter[1].texto != "AA" && pcLetter[0].texto + pcLetter[1].texto != "AA")
         break
   }

   // compra de cartas adicionais (usuário)
   while (true) {

      const resp = confirm("Suas cartas são:" + " " + listLetters(usLetter) + "." +
         "\nA carta revelada do computdor é " + pcLetter[0].texto +
         "\nDeseja comprar mais uma carta?")

      if (!resp) {
         usPoints = sumPoint(usLetter)
         break
      }

      usLetter.push(comprarCarta())
      usPoints = sumPoint(usLetter)

      if (usPoints >= 21) break

   }

   // VEZ DO COMPUTADOR JOGAR - compra de cartas 
   while (true) {

      pcPoints = sumPoint(pcLetter)
      
      if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) {
         break
      }

      pcLetter.push(comprarCarta())
      
   }

   // monta o texto final com as cartas compradas por ambos, mais os pontos.
   const text = resum()

   // VERIFICAÇÃO DO RESULTADO
   if (pcPoints === usPoints) {
      alert(text + "\n" + "Houve um empate!")
   } else if (usPoints > pcPoints) {
      if (usPoints > 21) {
         alert(text + "\n" + "o Computador Ganhou!")
      } else {
         alert(text + "\n" + "o Usuário Ganhou!")
      }
   } else if (pcPoints > usPoints) {
      if (pcPoints > 21) {
         alert(text + "\n" + "o Usuário Ganhou!")
      } else {
         alert(text + "\n" + "o Computador Ganhou!")
      }
   }
}

//// ZERAR CARTAS E PONTOS
function resetGame() {
   usLetter = ["",""]
   pcLetter = ["",""]
   usPoints = [0]
   pcPoints = [0]
}

/// retorna lista de CARTAS COMPRADAS
function listLetters(arr) {
   let result = ""
   arr.forEach(obj => {
      result += obj.texto + " "
   })
   return result.trim()
}

/// retorna a SOMA DOS PONTOS 
function sumPoint(arr) {
   return arr.reduce((total, current) => {
      total += current.valor
      return total
   }, 0)
}

/// RESUMO DAS CARTAS E PONTOS
function resum() {
   const text = "Usuário Cartas - " + listLetters(usLetter) + " - " + usPoints + "\n" +
      "Computador Cartas -" + listLetters(pcLetter) + " - " + pcPoints + "\n"
   return text
}
