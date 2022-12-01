"use strict"

let usLetter = []
let pcLetter = []
let usPoints = 0
let pcPoints = 0
let ncarta = 0

///////////////////////
///////////////////////
function lettersIni() {
    usLetter = []
    pcLetter = []
    const iniPc = [""]
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
    iniPc[0] = pcLetter[0]
    // mostrar cartas
    showLetter("user", usLetter)
    showLetter("pc", iniPc)
}

//////////////////////
//////////////////////
function usNewLetter() {
    const newLetter = comprarCarta()
    const arrLetter = []
    arrLetter.push(newLetter)
    usLetter.push(newLetter)
    usPoints += usLetter[usLetter.length - 1].valor
    showLetter("user", arrLetter)
}

////////////////////////
////////////////////////
function pcNewLetter() {
    const secPc =[""]
    secPc[0]=pcLetter[1]
    showLetter("pc", secPc)
    while (true) {
        if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) {
            break
        }
        let objPc=comprarCarta()
        const arr=[""]
        arr[0]=objPc 
        pcLetter.push(objPc)
        pcPoints += pcLetter[pcLetter.length - 1].valor
        showLetter("pc", arr)
    }
    result()
}

///////////////////
///////////////////
function result() {

    enableButtons()

    // VERIFICAÇÃO DO RESULTADO
    if (pcPoints === usPoints) {
        alert(text + "\n" + "Houve um empate!")
    } else if (usPoints > pcPoints) {
        usPoints > 21 ? alert(`o Computador Ganhou! Pontos: ${pcPoints} x Usuário ${usPoints}`) :
            alert(`o Usuário Ganhou! Pontos: ${usPoints} x Computador: ${pcPoints}`)
    } else if (pcPoints > usPoints) {
        pcPoints > 21 ? alert(`o Usuário Ganhou! Pontos: ${usPoints} x Computador: ${pcPoints}`) :
            alert(`o Computador Ganhou! Pontos: ${pcPoints} x Usuário ${usPoints}`)
    }
}

////////////////////////////////////
function showLetter(userType, arr) {
    let objWin = null
    for (const index in arr) {
        if (userType == "user") {
            objWin = document.querySelector("#user")
        } else {
            objWin = document.querySelector("#pc")
        }
        ncarta++
        // escopo local mas acessível aos elementos internos
        let numLetter = null
        let naipeLetter = null
        let text = arr[index].texto
        console.log(text)
        if (text.length==3) {
            numLetter = text[0]
            naipeLetter = text[1]
        } else { // 
            numLetter = text[0]+text[1]
            naipeLetter = text[2]
        }
        
        // div Carta
        let newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'carta');
        newdiv.setAttribute('id', 'c' + ncarta);
        objWin.appendChild(newdiv)
        // dentro da carta
        objWin = document.querySelector("#c" + ncarta)
        // criar três divs
        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-top')
        // criando elemento paragrafo 
        let paragrafo = document.createElement("p")
        // inserindo texto no pagragrafo
        let texto = document.createTextNode(naipeLetter)
        // aplicando o texto ao paragrafo
        paragrafo.appendChild(texto);
        // adicionando o novo paragrao a nova div
        newdiv.appendChild(paragrafo)
        objWin.appendChild(newdiv)

        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-center')
        // criando elemento paragrafo 
        paragrafo = document.createElement("p")
        // inserindo texto no pagragrafo
        texto = document.createTextNode(numLetter)
        // aplicando o texto ao paragrafo
        paragrafo.appendChild(texto);
        // adicionando o novo paragrao a nova div
        newdiv.appendChild(paragrafo)
        objWin.appendChild(newdiv)

        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-botton')
        // criando elemento paragrafo 
        paragrafo = document.createElement("p")
        // inserindo texto no pagragrafo
        texto = document.createTextNode(naipeLetter)
        // aplicando o texto ao paragrafo
        paragrafo.appendChild(texto);
        // adicionando o novo paragrao a nova div
        newdiv.appendChild(paragrafo)
        objWin.appendChild(newdiv)

    }
    //if (usPoints > 21 || pcPoints > 21) {
    if (usPoints > 21 ) {
        pcNewLetter()
    }

}



//////////////////////
function startGame() {
    //element.classList.add('new-class')
    //element.classList.remove('new-class')
    //element.classList.replace('old-class', 'new-class')
    enableButtons()
    lettersIni()  // cartas iniciais
}

function enableButtons() {
    let element = document.querySelector('#b1')
    element.classList.toggle('none')
    element = document.querySelector('#b2')
    element.classList.toggle('none')
    element = document.querySelector('#b3')
    element.classList.toggle('none')
    element = document.querySelector('#b4')
    element.classList.toggle('none')

}