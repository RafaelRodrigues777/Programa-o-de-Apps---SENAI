const desafio = require('./desafio.json').vehicles

// Filtrar apenas hatch ativos
filtro1 = desafio.filter((p) => (p.category == "Hatch"))

// Filtrar apenas Sedan ativos
filtro2 = desafio.filter((p) => (p.category == "Sedan"))

// Filtrar apenas SUV ativos
filtro3 = desafio.filter((p) => (p.category == "SUV"))

// Filtrar apenas Sedan Premium ativos
filtro4 = desafio.filter((p) => (p.category == "Sedan Premium"))

// Filtrar acima de 2010
filtro5= desafio.filter((p) => (p.year > 2010))

// Filtrar Flex
filtro6 = desafio.filter((p) => (p.fuel > "Flex"))

// Filtrar Eletrico
filtro7 = desafio.filter((p) => (p.fuel > "Electric"))

// Filtrar Diesel
filtro8 = desafio.filter((p) => (p.fuel > "Diesel"))

// Filtrar hp
filtro9 = desafio.filter((p) => (p.horsepower > 120))

// Filtrar km/litro
filtro10 = desafio.filter((p) => (p.city_km_l > 10.0))

//preço total dos carros
const price = desafio.reduce((acc, desafioo) =>{
    return acc + desafioo.price_brl
}, 0)

// media de km
const mediakm = desafio.reduce((acc, desafioo) =>{
    return acc + desafioo.city_km_l / desafio.length
}, 0)

//  
console.log(mediakm)

