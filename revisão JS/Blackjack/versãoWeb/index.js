"use strict"

let usLetter = []
let pcLetter = []
let usPoints = 0
let pcPoints = 0
let ncarta = 0

//////////////////////
function startGame() {
    //element.classList.remove('new-class')
    //element.classList.replace('old-class', 'new-class')

    // remove as divs
    document.getElementById('user').remove()
    document.getElementById('pc').remove()

    //cria div USER
    let objWin = document.querySelector('#container')
    let newDiv = document.createElement("div")
    newDiv.classList.add('mesa')
    newDiv.classList.add('flex')
    newDiv.setAttribute('id', 'user')
    objWin.appendChild(newDiv)
    
    //cria div PC
    objWin = document.querySelector('#container')
    newDiv = document.createElement("div")
    newDiv.classList.add('mesa')
    newDiv.classList.add('flex')
    newDiv.setAttribute('id', 'pc')
    objWin.appendChild(newDiv)

    enableButtons()
    lettersIni()  // cartas iniciais
}

//////////////////////////
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

///////////////////////
function lettersIni() {
    usLetter = ["", ""]
    pcLetter = ["", ""]
    usPoints = 0
    pcPoints = 0
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
function usNewLetter() {
    const newLetter = comprarCarta()
    const arrLetter = []
    arrLetter.push(newLetter)
    usLetter.push(newLetter)
    usPoints += arrLetter[0].valor

    showLetter("user", arrLetter)
    if (usPoints >= 21) {
        pcNewLetter()
    }
    return
}

////////////////////////
function pcNewLetter() {
    const secPc = []
    secPc.push(pcLetter[1])
    showLetter("pc", secPc)
    while (true) {
        if (usPoints > 21 || pcPoints >= usPoints || pcPoints >= 21) {
            break
        }
        const newLetter = comprarCarta()
        const arrLetter = []
        arrLetter.push(newLetter)
        pcLetter.push(newLetter)
        pcPoints += arrLetter[0].valor
        showLetter("pc", arrLetter)
    }

    result()
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
        console.log(text,text.length)
        if (text.length == 3) {
            numLetter = text[0]
            naipeLetter = text[1]
        } else { // 
            numLetter = text[0] + text[1]
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

        // adicionando elementos da carta
        newdiv.appendChild(createVisualValueLetter(naipeLetter))
        objWin.appendChild(newdiv)

        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-center')

        // adicionando elementos da carta
        newdiv.appendChild(createVisualValueLetter(numLetter))
        objWin.appendChild(newdiv)

        newdiv = document.createElement("div")
        newdiv.setAttribute('class', 'icarta carta-botton')

        // adicionando elementos da carta
        newdiv.appendChild(createVisualValueLetter(naipeLetter))
        objWin.appendChild(newdiv)
    }
}

// parte visual da carta ( naipes e valor )
function createVisualValueLetter(element) {
    let paragrafo = document.createElement("p")
    let text = document.createTextNode(element)
    paragrafo.appendChild(text)
    return paragrafo
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
