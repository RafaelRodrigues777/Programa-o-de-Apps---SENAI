class veiculo {
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco) {
        if (this.constructor === veiculo) {
            console.error("Erro.");
            return;
        }
        this.#id = id
        this.setMarca(marca)
        this.setModelo(modelo)
        this.setPreco(preco)
        this.#disponivel = true
    }

    getId() {
        return this.#id
    }

    getMarcaModelo() {
        return `${this.#marca} ${this.#modelo}`
    }

    getPreco() {
        return this.#preco
    }

    alterarPreco(novoPreco) {
        if (novoPreco <= 0) {
            console.error("Verifique o Preço.");
            return;
        }
        if (!this.#disponivel) {
            console.error("Veiculo Indisponivel.");
            return;
        }
        this.#preco = novoPreco;
    }

    estaDisponivel() {
        return this.#disponivel
    }

    vender() {
        if (!this.#disponivel) {
            console.error("O veículo não disponivel para venda.");
            return;
        }
        this.#disponivel = false
    }

    retornarAoEstoque() {
        this.#disponivel = true
    }

    exibirDados() {
        return `ID: ${this.#id}, Marca: ${this.#marca}, Modelo: ${this.#modelo}, Preço: R$ ${this.#preco?.toFixed(2)}, Disponível: ${this.#disponivel ? 'Sim' : 'Não'}`
    }

    setMarca(marca) {
        if (!marca || marca.length < 2) {
            console.error("A marca deve conter no mínimo 2 caracteres.");
            return;
        }
        this.#marca = marca
    }

    setModelo(modelo) {
        if (!modelo || modelo.length < 2) {
            console.error("O modelo deve conter no mínimo 2 caracteres.");
            return;
        }
        this.#modelo = modelo
    }

    setPreco(preco) {
        this.alterarPreco(preco)
    }
}

class carro extends veiculo {
    #portas

    constructor(id, marca, modelo, preco, portas) {
        super(id, marca, modelo, preco)
        this.setPortas(portas)
    }

    getportas() {
        return this.#portas
    }

    setPortas(portas) {
        if (typeof portas !== 'number' || portas <= 0) {
            console.error("O número de portas deve ser maior que 0.");
            return;
        }
        this.#portas = portas
    }

    exibirDados() {
        return super.exibirDados() + `, Portas: ${this.#portas}`
    }
}

class moto extends veiculo {
    #cilindradas

    constructor(id, marca, modelo, preco, cilindradas) {
        super(id, marca, modelo, preco)
        this.setCilindradas(cilindradas)
    }

    getcilindradas() {
        return this.#cilindradas
    }

    setCilindradas(cilindradas) {
        if (typeof cilindradas !== 'number' || cilindradas <= 0) {
            console.error("As cilindradas devem ser maior que 0.");
            return;
        }
        if (cilindradas < 50 || cilindradas > 2000) {
            console.error("As cilindradas devem estar entre 50 e 2000.");
            return;
        }
        this.#cilindradas = cilindradas
    }

    exibirDados() {
        return super.exibirDados() + `, Cilindradas: ${this.#cilindradas}`
    }
}

const carro1 = new carro(1, "Fiat", "Argo", 80000, 4)
console.log(carro1.exibirDados())

carro1.alterarPreco(85000)
console.log("Preço alterado:", carro1.getPreco())

carro1.vender()
console.log("venda:", carro1.exibirDados())

carro1.alterarPreco(90000) 

carro1.retornarAoEstoque()
console.log("Estoque:", carro1.exibirDados())