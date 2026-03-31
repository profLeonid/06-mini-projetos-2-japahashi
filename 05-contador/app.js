'use strict'
function criarListaNumeros(quantidade){

    let listaNumero = []

    for (let i = 1; i<= quantidade;i++){

        listaNumero.push(i)
    }

    return listaNumero
}

function criarListaPares(quantidade){
    
    let listaPares = []
    
    for(let i = 0; i <= quantidade;i++){

        listaPares.push(i*2)
    }
    return listaPares
}

function criarListaImpares(quantidade){

    let listaImpares = []

    for(let i = 1; i <= quantidade;i++){
        
        listaImpares.push((i*2)-1)

    }
    return listaImpares
}

function criarListaMutiplos5(quantidade){

    let listaMultiplos5 = []

    for(let i = 1; i <= quantidade; i++){

        listaMultiplos5.push(i*5)
    }
    return listaMultiplos5
}

function criarListaPotencia(quantidade){
    let listaPotencia = []
    let potencia = 2
    let numeroPotencia
    for (let i = 0; i < quantidade; i++){
        numeroPotencia = potencia ** i 
        listaPotencia.push(numeroPotencia)
    }
    return listaPotencia
}

function criarLinha(num,par,impar,mut5,potencia){
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')


    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdPar = document.createElement('td')
    tdPar.textContent = par

    const tdImpar = document.createElement('td')
    tdImpar.textContent = impar

    const tdMut5 = document.createElement('td')
    tdMut5.textContent = mut5

    const tdPotencia = document.createElement('td')
    tdPotencia.textContent = potencia

    tr.replaceChildren(tdNum,tdPar,tdImpar,tdMut5,tdPotencia)
    tbody.appendChild(tr)
}

function handleClick(){

    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumeros(quantidade)

    const listaPares = criarListaPares(quantidade)

    const listaImpares = criarListaImpares(quantidade)
    
    const listaMultiplos5 = criarListaMutiplos5(quantidade)

    const listaPotencia = criarListaPotencia(quantidade)

    document.getElementById('tbody').replaceChildren()

    for(let i = 0 ; i < quantidade; i++){
        

        criarLinha(listaNumeros[i],listaPares[i],listaImpares[i],listaMultiplos5[i],listaPotencia[i])

        
    }

    

}


