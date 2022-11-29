/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const usLetter = ["", ""]
const pcLetter = ["", ""]
let usPoints = [0]
let pcPoints = [0]

if (confirm("Seja bem-vindo(a) ao jogo de blackjack!\nDeseja iniciar uma nova rodada?")) {

   while (true) {

      usLetter[0] = comprarCarta()
      usLetter[1] = comprarCarta()

      pcLetter[0] = comprarCarta()
      pcLetter[1] = comprarCarta()

      if (usLetter[0].texto + usLetter[1].texto != "AA"
         && pcLetter[0].texto + pcLetter[1].texto != "AA")
         break

   }
   // compra de cartas do usuário
   while (true) {
      const resp = confirm("Suas carta são:" +" "+letters(usLetter) + "." +
         " A carta revelada do computdor é " + pcLetter[0].texto) +
         "\nDeseja comprar mais uma carta?"

      if (!resp) break

      usLetter.push(comprarCarta())
      usPoints = sumPoint(usLetter)

      if (usPoints >= 21) break

   }
   // compra de cartas do computador
   while (true) {
      if (usPoints>21 || pcPoints>=usPoints || pcPoints>=21) break

      pcLetter.push(comprarCarta())
      pcPoints = sumPoint(pcLetter)

   }

   const text = resum()

   if (pcPoints === usPoints){
      alert(text+"\n"+"Houve um empate!")    
   } else if (pcPoints > 21 || usPoints > pcPoints){
      alert(text+"\n"+"o Usuário Ganhou!")
   } else {
      alert(text+"\n"+"o Computador Ganhou!")
   }


} else {
   console.log("O jogo acabou!")
}


/// RESUMO DAS CARTAS E PONTOS
function resum(){
   const text = "Usuário Cartas - "+letters(usLetter)+" - "+usPoints+"\n"+
               "Computador Cartas -"+letters(pcLetter)+" - "+pcPoints+"\n"
   return text
}

/// CARTAS COMPRADAS
function letters(arr) {
   let result = ""
   arr.forEach(obj => {
      result += obj.texto + " "
   })
   return result.trim()
}

/// SOMA DOS PONTOS
function sumPoint(arr) {
   console.log(arr)
   return arr.reduce((total, current) => {
      total += current.valor
      return total
   }, 0)
}


