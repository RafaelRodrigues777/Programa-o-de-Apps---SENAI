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