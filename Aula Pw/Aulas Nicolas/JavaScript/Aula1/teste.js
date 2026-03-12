let botao = document.getElementById('botao')
let todo = document.getElementById('todo')
let tarefa = document.getElementById('tarefa')

botao.addEventListener('click', adicionar_item)

function adicionar_item() {
    let new_item = document.createElement('li')
    new_item.innerHTML = tarefa.value
    tarefa.value = ""
    todo.appendChild(new_item)
}
botao2.addEventListener('click', remover)

function remover(){
    let todos = document.getElementById('todo');
    if (todo.lastElementChild) {
        todo.removeChild(todos.lastElementChild);
    }
}
