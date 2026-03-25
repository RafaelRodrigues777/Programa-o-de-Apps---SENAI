function somar() {
    let numero1 = Number(document.getElementById('n1').value)
    let numero2 = Number(document.querySelector('#n2').value)
    
    let resposta = document.querySelector('#resposta')

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
    trocarcor(MudarCor.value)
})

function trocarcor(cor){
    square.style.backgroundColor = cor   
}

// ================= LISTA =================
let botao = document.getElementById('botao')
let myList = document.getElementById('myList')
let ti = document.getElementById('ti')

botao.addEventListener('click', add)

function add(){
    let item = document.createElement('li')
    item.innerHTML = ti.value

    ti.value = "" // limpa o input

    myList.appendChild(item)
}