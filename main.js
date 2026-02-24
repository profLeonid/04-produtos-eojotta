'use strict'
function adicionarProduto(){

    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    const lista = document.getElementById('lista')

    const valorCodigo = codigo.value.trim()
    const valorProduto = produto.value.trim()
    const valorQuantidade = quantidade.value.trim()

   
    if (!valorCodigo || !valorProduto || !valorQuantidade) {
        alert('Preencha todos os campos!')
        return
    }


    const linha = document.createElement('div')
    linha.className = 'flex gap-4'

  
    const boxCodigo = document.createElement('span')
    boxCodigo.textContent = valorCodigo
    boxCodigo.className = 'bg-blue-200 px-4 py-2 rounded'

    const boxProduto = document.createElement('span')
    boxProduto.textContent = valorProduto
    boxProduto.className = 'bg-green-200 px-4 py-2 rounded'

    const boxQuantidade = document.createElement('span')
    boxQuantidade.textContent = valorQuantidade
    boxQuantidade.className = 'bg-yellow-200 px-4 py-2 rounded'

    
    linha.appendChild(boxCodigo)
    linha.appendChild(boxProduto)
    linha.appendChild(boxQuantidade)

    
    lista.appendChild(linha)


    codigo.value = ''
    produto.value = ''
    quantidade.value = ''
}