'use strict'
function criarListaNumeros(quantidade) {

    let listaNumero = []

    for (let i = 1; i <= 10; i++) {

        listaNumero.push(i)
    }

    return listaNumero

}

function criarListaAdicao(quantidade) {

    let listaAdicao = []

    for (let i = 1; i <= 10; i++) {

        listaAdicao.push(quantidade + i)

    }
    return listaAdicao
}

function criarListaSubtracao(quantidade) {

    let listaSubtracao = []

    for (let i = 1; i <= 10; i++) {

        listaSubtracao.push(quantidade - i)

    }

    return listaSubtracao
}

function criarListaMultiplicacao(quantidade) {

    let listaMultilplicacao = []

    for (let i = 1; i <= 10; i++) {

        listaMultilplicacao.push(quantidade * i)
    }
    return listaMultilplicacao

}

function criarListaDivisao(quantidade) {

    let listaDivisao = []

    for (let i = 1; i <= 10; i++) {

        listaDivisao.push((quantidade / i).toFixed(2))
    }

    return listaDivisao


}

function criarLinha(num, ad, sub, mult, div) {

    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')


    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdAd = document.createElement('td')
    tdAd.textContent = ad

    const tdSub = document.createElement('td')
    tdSub.textContent = sub

    const tdMult = document.createElement('td')
    tdMult.textContent = mult

    const tdDiv = document.createElement('td')
    tdDiv.textContent = div

    tr.replaceChildren(tdNum, tdAd, tdSub, tdMult, tdDiv)
    tbody.appendChild(tr)

    
}

function handleClick() {


    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumeros(quantidade)

    const listaAdicao = criarListaAdicao(quantidade)

    const listaSubtracao = criarListaSubtracao(quantidade)

    const listaMultilplicacao = criarListaMultiplicacao(quantidade)

    const listaDivisao = criarListaDivisao(quantidade)

    document.getElementById('tbody').replaceChildren()

    for (let i = 0; i <= 10; i++) {

        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultilplicacao[i], listaDivisao[i])


}


}









