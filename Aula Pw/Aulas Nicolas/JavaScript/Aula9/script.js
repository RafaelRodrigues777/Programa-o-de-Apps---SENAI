const pessoa = require('./data.json')

const pessoas = pessoa.filter((pessoa) => pessoa.salary == 1231)  
const pais = pessoa.map((pessoa) => {
    return {name: pessoa.name, parents:pessoa.parents}
})

const fetchData = async() => {   
    const people = await fetch("https://servicodados.ibge.gov.br/api/v1/paises/indicadores/{indicadores}")
    const data = await people.json()
    console.log(data)
}

fetchData();