const { Verify } = require("node:crypto")

class item {
    #id
    #title
    #available

    constructor(id, title) {

        if (!title) {
            return console.error("Ocorreu um erro. Confira novamente os dados")
        }

        this.#id = id
        this.#title = title
        this.#available = true

    }
    getId() {
        return this.#id
    }
    getTitle() {
        return this.#title
    }
    setTitle(title) {
        return !title ? console.error("Erro ao setar nome") : this.#title = title
            
    }
    VerifyAvailability(available){
        return this.#available == true ? console.error("Disponivel") : console.error("Indisponivel")
    }
    lendbook(){
        return 
    }

}
class Book extends item {
    author
    constructor(id,title,available,author){
        
        this.author = author

        super(id,title,available)
        if (!author) {
            return console.error("Ocorreu um erro. Confira novamente os dados")
        }
    }
}
class Movie extends User{
    duration
    constructor(id,title,duration) {
        if (duration < 0) {duration.lenght < 0 ? console.error("Erro ao setar duração") : this.duration = duration        }
        super(id,title)
        this.duration = duration   


    }
}

