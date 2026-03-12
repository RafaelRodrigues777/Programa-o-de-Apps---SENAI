function somar() {
    let numero1 = Number(document.getElementById('n1').value)
    let numero2 = Number(document.querySelector('#n2').value)
    
    let resposta = document.querySelector('#resposta')

    let soma  = numero1 + numero2

    resposta.innerHTML = soma
    //console.log(numero1 + numero2) // Resposta no Console
    //alert(numero1 + numero2) // PopUp de alerta

}  
function alterar_imagem(){
    let imagem = document.getElementById('imagem')

    imagem.setAttribute('src','https://i.pinimg.com/736x/f8/c5/43/f8c543fe4749bdbeacef1a1795f10b04.jpg')
}



let square = document.getElementById('Q1')

// function alterar_cor(){
//     square.style.backgroundColor = "yellow"    
// }

// square.addEventListener('click',alterar_cor)


MudarCor.addEventListener('input',function(){
    trocarcor(MudarCor.value)
})


function trocarcor(cor){
    square.style.backgroundColor = cor   
}






let  = document.getElementById('imagem')
let botao = document.getElementById('botao')
let myList = document.getElementById('myList')
let ti = document.getElementById('ti')

function add(){
    let item = document.createElement('li')
    item.innerHTML = ti.value

    myList.appendChild(item)

}

botao.addEventListener('click', adicionar_item)

function adicionar_item() {
    let new_item = document.createElement('li')
    new_item.innerHTML = tarefa.value
    tarefa.value = ""
    todo.appendChild(new_item)
}