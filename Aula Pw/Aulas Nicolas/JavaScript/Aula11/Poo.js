class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  exibirDetalhes() {
    console.log(`Carro: ${this.marca} ${this.modelo}`);
  }
}

// Criando instâncias (objetos)
const carro1 = new Carro("FORD","Fiesta");
const carro2 = new Carro("Ferrari", "Puro Sangue");
const carro3 = new Carro("FORD","Mustange");

carro1.exibirDetalhes(); // Saída: Carro: Toyota Corolla
carro2.exibirDetalhes(); // Saída: Carro: Honda Civic
carro3.exibirDetalhes();


//======================================================
class Pessoa {
  constructor(Nome, Cor) {
    this.Nome = Nome;
    this.Cor = Cor;
  }

  exibirDetalhes2() {
    console.log(`Pessoa: ${this.Nome} ${this.Cor}`);
  }

  andar() {
    console.log(`Pessoa: ${this.Nome} ${this.Cor} Andou até a sua morte` );
  }
}

// Criando instâncias (objetos)
const pessoa1 = new Pessoa("Neymar","Black");
const pessoa2 = new Pessoa("Tony Stark", "Rainbow");
const pessoa3 = new Pessoa("Cebolinha","Verde");

pessoa1.exibirDetalhes2(); 
pessoa2.exibirDetalhes2(); 
pessoa3.exibirDetalhes2();
pessoa1.andar();
pessoa2.andar();
pessoa3.andar();

//======================================================
class Produto {
  constructor(Nome, Sabor) {
    this.Nome = Nome;
    this.Sabor = Sabor;
  }

  exibirDetalhes2() {
    console.log(`Produto: ${this.Nome} ${this.Sabor}`);
  }

  preco() {
    console.log(`Produto: ${this.Nome} ${this.Sabor} ` );
  }
}

// Criando instâncias (objetos)
const produto1 = new Produto("Chocolate","Branco");
const produto2 = new Produto("Amaciante", "rosas");
const produto3 = new Produto("Shampoo","Coco");

produto1.exibirDetalhes2(); 
produto2.exibirDetalhes2(); 
produto3.exibirDetalhes2();
produto1.preco();
produto2.preco();
produto3.preco();





// Classe: Pessoa
// Objeto: Neymar, Tony Stark, Cebolinha

// Classe: Carro
// Objeto: Ferrari, Mustange, Fiesta

// Classe: Animal 
// Objeto: Leão, Humano, Quero-Quero, Capivara

// classe: Produto
// Objeto: Chocolate, Amaciante, Bom Brim, Shampoo

