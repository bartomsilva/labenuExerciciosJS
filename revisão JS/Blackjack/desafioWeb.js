"use strict"

let usLetter = []
let pcLetter = []
let usPoints = 0
let pcPoints = 0

///////////////////////
///////////////////////
function lettersIni() {
    while (true) {
        usLetter = []
        pcLetter = []
        while (true) {
            usLetter[0] = comprarCarta()
            usLetter[1] = comprarCarta()
            pcLetter[0] = comprarCarta()
            pcLetter[1] = comprarCarta()
            usPoints = usLetter[0].valor + usLetter[1].valor
            pcPoints = pcLetter[0].valor + pcLetter[1].valor
            if (usLetter[0].texto + usLetter[1].texto != "AA" && pcLetter[0].texto + pcLetter[1].texto != "AA")
                break
        }
    }
}

//////////////////////
//////////////////////
function usNewLetter() {
    usLetter.push(comprarCarta())
    usPoints += usLetter[usLetter.length - 1].valor
}

////////////////////////
////////////////////////
function pcNewLetter() {
    while (true) {
        if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) {
            break
        }
        pcLetter.push(comprarCarta())
        pcPoints += pcLetter[pcLetter.length - 1].valor
    }
}

///////////////////
///////////////////
function result() {
    // monta o texto final com as cartas compradas por ambos, mais os pontos.
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

///////////////////////////
///////////////////////////
function listLetters(arr) {
    let result = ""
    arr.forEach(obj => result += obj.texto + " ")
    return result.trim()
}

//////////////////
//////////////////
function resum() {
    const text = "Usuário Cartas - " + listLetters(usLetter) + " - " + usPoints + "\n" +
        "Computador Cartas -" + listLetters(pcLetter) + " - " + pcPoints + "\n"
    return text
}


function newElementDom() {
    let newDivP = document.createElement("div")        
    document.querySelector('#user').appendChild(newDivP)
}