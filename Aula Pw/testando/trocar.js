function somar() {
    let numero1 = Number(document.getElementById('n1').value)
    let numero2 = Number(document.getElementById('n2').value)
    
    let resposta = document.getElementById('resposta')

    let soma = numero1 + numero2

    resposta.innerHTML = soma
}

function alterar_imagem(){
    let imagem = document.getElementById('imagem')

    imagem.setAttribute(
        'src',
        'https://i.pinimg.com/736x/f8/c5/43/f8c543fe4749bdbeacef1a1795f10b04.jpg'
    )
}

// ================= COR =================
let square = document.getElementById('Q1')
let MudarCor = document.getElementById('MudarCor')

MudarCor.addEventListener('input', function(){
    square.style.backgroundColor = MudarCor.value
})