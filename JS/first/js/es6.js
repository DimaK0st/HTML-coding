// Class
function User(name, id) {
    this.name = name
    this.id = id
    this.human = true
    this.hello = () => {
        console.log(`Hello ${this.name}, id= ${id}`)
    }
}

User.prototype.allInfo = function () {
    console.log(`Name ${this.name}`)
    console.log(`Id ${this.id}`)
    console.log(`Human ${this.human}`)
}

const ivan = new User('Ivan', 666)
ivan.hello()
console.log(ivan)
ivan.allInfo()

//es6
class UserV2 {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.human = true
    }

    hello() {
        console.log(`Hello ${this.name}, id= ${this.id}`)
    }

    allInfo() {
        console.log(`Name ${this.name}`)
        console.log(`Id ${this.id}`)
        console.log(`Human ${this.human}`)
    }
}


