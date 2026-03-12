class Automovel {
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