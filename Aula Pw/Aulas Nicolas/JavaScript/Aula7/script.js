// let x = [1,2,'teste',{name:'Artur', lastname:'oliveira'},4]
// Explicação de fifo e lifo
// Push + e Pop -                lifo
// Enqueue + e Dequeue -         Fifo

const pessoas = []

const pessoa1 = {
    name: 'Erich',
    lastname: 'Natal',
    age: 22,
    empresa: 'Bosch'
}

const pessoa2 = {
    name: 'Igor',
    lastname: 'Machado',
    age: 20,
    empresa: 'Bosch'
}

const pessoa3 = {
    name: 'Maria',
    lastname: 'Clara',
    age: 18,
    empresa: 'Bosch'
}

const pessoa4 = {
    name: 'Leticia',
    lastname: 'Costa',
    age: 20,
    empresa: 'Bosch'
}

const pessoa5 = {
    name: 'Guilherme',
    lastname: 'Serio',
    age: 23,
    empresa: 'Bosch'
}




console.log(pessoas)

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)

const filteredPeople = pessoas.filter((p) => (p.age > 20))
const findLeticia = pessoas.find((p) => (p.name == "Leticia"))


console.log(findLeticia)
console.log(filteredPeople)
console.log(pessoas.indexOf(findLeticia))

let container = document.getElementById('container')

function createCard(pessoa){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.name} ${pessoa.age}`
    div.appendChild(span)
    
    return div
}

filteredPeople.forEach(pessoa => {
    const card = createCard(pessoa)
    container.appendChild(card)
})