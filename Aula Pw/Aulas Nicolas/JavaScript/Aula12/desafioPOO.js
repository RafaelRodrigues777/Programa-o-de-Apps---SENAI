const { userInfo } = require("node:os")

class User {
    #id
    #name
    #email
    #password
    #active

    constructor(id,name,email,password,active){
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = active
    }

    get id() {
        return this.#id
    }

    get name(){
        return this.#name
    }

    set name(value) {
        this.#name = value
    }

    set email(value) {
        this.#email = value
    }
    set password(value) {
        this.#password = value
    }
    set active(value) {
        this.# = value
    }

    verficiarSenha() {
        return this.#password.length > 6
    }

    verificarName(){
        return this.#name !== null
    }

    verificarEmail(){
        return this.#email.includes('@')
    }
}
class Admin extends User{
    constructor(id, name, email, password) {    
        super(id,name,email,password)
    }
}
let c1 = new User("","1111","40028922","Diego", 1500)





// teste = 1
// test = 2 

// teste = {
//     "teste" : test,
//     "teste" :teste
// }
// with open("asdasdasd" , "w") as nome:
//     json.dumps(teste, nome )
