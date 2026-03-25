class Automovel {
    
    //colocar # para deixar private, colocar em todos com o mesmo nomex
    // #modelo
    // #marca
    // cor
    // #ano
    // #motor
    constructor(modelo,marca,cor,ano,motor) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar(){
        console.log(`O veículo ${this.marca} ${this.modelo} está acelerando`)
    }
    
    frear(){
        console.log(`O veículo ${this.marca} ${this.modelo} está freando`)
    }

    esterçar(lado){
        console.log(`O veículo ${this.marca} ${this.modelo} está virando para a ${lado}`)
    }
}

class carro extends Automovel{
    abrirPorta(){
        return "Abrindo as portas"
    }
}

class moto extends Automovel{
    grau(){
        return "Olha o grau"
    }
}

const carro = new carro("Corsa","Chevrolet","Preto", 2000, "1.0L")
const carro = new moto("S1000RR","BMW","Azul", 2015, "1000")

console.log(carro.acelerar())
console.log(carro.abrirPorta())

console.log(moto.acelerar())
console.log(moto.grau())
