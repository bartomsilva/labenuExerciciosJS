// declaração das variáveis
let usLetter = []
let pcLetter = []
let usPoints = []
let pcPoints = []

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

      if (usLetter[0].texto + usLetter[1].texto != "AA"
         && pcLetter[0].texto + pcLetter[1].texto != "AA")
         break
   }

   // compra de cartas adicionais (usuário)
   while (true) {

      // exibe as cartas e a carta revelada do computador
      // e pergunta se deseja comprar mais cartas
      const resp = confirm("Suas cartas são:" + " " + letters(usLetter) + "." +
         "\n A carta revelada do computdor é " + pcLetter[0].texto +
         "\nDeseja comprar mais uma carta?")

      // se a resposta da pergunta acima for não sai do loop
      if (!resp) {
         usPoints = sumPoint(usLetter)
         break
      }
      // uma carta comprada
      usLetter.push(comprarCarta())

      // soma dos pontos
      usPoints = sumPoint(usLetter)

      // com a carta comprada verifica se atigiu ou ultrapassou o limete de 21
      if (usPoints >= 21) break

   }

   // compra de cartas (computador)
   while (true) {

      // o computador apela d+++
      // se o usuário extrapolou os 21 pontos, ou os pontos do computador forem maiores
      // do que os pontos do usuário ou o computador venha extrapolar os 21
      // encerra a compra de cartas
      if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) {
         // soma dos pontos (computador)
         pcPoints = sumPoint(pcLetter)
         break
      }

      // computador compra uma carta
      pcLetter.push(comprarCarta())

      // soma dos pontos
      pcPoints = sumPoint(pcLetter)

   }

   // monta o texto final com as cartas compradas por ambos, mais os pontos.
   const text = resum()

   if (pcPoints === usPoints) {
      alert(text + "\n" + "Houve um empate!")
   }

   if (usPoints > pcPoints) {
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

/// RESUMO DAS CARTAS E PONTOS
// monta o texto apresentado no final do game
function resum() {
   const text = "Usuário Cartas - " + letters(usLetter) + " - " + usPoints + "\n" +
      "Computador Cartas -" + letters(pcLetter) + " - " + pcPoints + "\n"
   return text
}

/// retorna lista de CARTAS COMPRADAS
function letters(arr) {
   let result = ""
   arr.forEach(obj => {
      result += obj.texto + " "
   })
   return result.trim()
}

/// retorna a SOMA DOS PONTOS (individual)
function sumPoint(arr) {
   return arr.reduce((total, current) => {
      total += current.valor
      return total
   }, 0)
}
