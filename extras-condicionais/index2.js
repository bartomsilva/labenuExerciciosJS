/*
4. Considere a situação: você vai ao cinema com um amigo ou amiga,
porém ele/ela só assistirá a um 
filme com você se ele for do
 gênero fantasia
**e** 
se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga
vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `
   "Bom filme!"`, caso contrário, imprima `
   "Escolha outro filme :("`

- Desafios
    1. Modifique o código do exercício 4 de escrita de código para,
    antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, 
    pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) 
    e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, 
    
    /////////////////////////////////////////////////////////
    trocando [LANCHINHO] pelo que o usuário colocou no input.
    /////////////////////////////////////////////////////////

*/
/*

const generoDoFilme   = prompt("Qual gênero do filme vão assistir?").toLowerCase()
const valorDoIngresso = Number(prompt("Qual é o valor do ingresso?"))
let lanchinho=null
let seuSua="seu"
if ( generoDoFilme != "fantasia" || valorDoIngresso > 15) {
    console.log("Escolha outro filme :(")
} else {
    lanchinho=prompt(`Qual lanchinho vai comprar?
                 se não quiser lanche click OK`).toLowerCase()
    
    if(lanchinho===""){
        console.log("Bom filme!")
    } else {
        if(lanchinho[lanchinho.length-1]=="a" ||
        (lanchinho[lanchinho.length-1]=="ã")) {
            seuSua="sua"
        }
        console.log(`Bom filme! e a proveite ${seuSua} ${lanchinho}`)
    } 
}
*/

