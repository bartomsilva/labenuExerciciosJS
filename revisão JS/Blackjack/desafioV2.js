"use strict"
// declaração das variáveis
let usLetter1 = ""
let usLetter2 = ""
let usText=""
let usPoints = 0
let pcLetter1 = ""
let pcLetter2 = ""
let pcText=""
let pcPoints = 0
let publicLetter=""
// iniciando o Jogo
while (true) {
   const resp = confirm("Olá, esse é BLACKJACK do Bart" +
      "\nDeseja iniciar uma nova rodada?")
   if (!resp) break
   
   while (true) {    // sorteio das cartas iniciais 
      usLetter1 = comprarCarta()
      usLetter2 = comprarCarta()
      pcLetter1 = comprarCarta()
      pcLetter2 = comprarCarta()
      usText = usLetter1.texto+" "+usLetter2.texto
      pcText = pcLetter1.texto+" "+pcLetter2.texto
      usPoints = usLetter1.valor + usLetter2.valor
      pcPoints = pcLetter1.valor + pcLetter2.valor

      if (usLetter1.texto + usLetter2.texto != "AA" && pcLetter1.texto + pcLetter2.texto != "AA")
         break
   }
   while (true) {    // compra de cartas adicionais (usuário)
      const resp = confirm("Suas cartas são:" + " " + usText + "." +
         "\nA carta revelada do computdor é " + pcLetter1.texto +
         "\nDeseja comprar mais uma carta?")
      if (!resp) break      
      publicLetter=comprarCarta()
      usText +=" "+publicLetter.texto
      usPoints += publicLetter.valor
      if (usPoints >= 21) break
   }
   while (true) { // VEZ DO COMPUTADOR JOGAR - compra de cartas 
      if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) break      
      publicLetter=comprarCarta()
      pcText += " "+publicLetter.texto
      pcPoints+=publicLetter.valor      
   }
   const text = resum()
   // VERIFICAÇÃO DO RESULTADO
   if (pcPoints === usPoints) {
      alert(text + "\n" + "Houve um empate!")
   } else if (usPoints > pcPoints) {
      usPoints > 21 ? alert(text + "\n" + "o Computador Ganhou!") : alert(text + "\n" + "o Usuário Ganhou!")      
   } else if (pcPoints > usPoints) {
      pcPoints > 21 ? alert(text + "\n" + "o Usuário Ganhou!") : alert(text + "\n" + "o Computador Ganhou!")
   }   
}
function resum() {
   const text = "Usuário Cartas - " + usText + " - " + usPoints + "\n" +
      "Computador Cartas -" + pcText + " - " + pcPoints + "\n"
   return text
}
