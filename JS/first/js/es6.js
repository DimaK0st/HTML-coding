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

let ivan = new User('Ivan', 666)
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

//getter/setter

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {
        return this.age
    },

    set userAge(num) {
        this.age = num
    }
}

console.log(persone.userAge = 30)
console.log(persone.userAge)

//Инкапсуляция

function User3(name, age) {
    this.name = name
    this.age = age

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`)
    }
}

ivan = new User3('Ivan', 10)
ivan.say()

ivan.name = 'Stepan'
ivan.age = 30

ivan.say()


function User4(name, age) {
    this.name = name
    let userAge = age

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`)
    }

    this.getAge = function () {
        return userAge;
    }

    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 150) {
            userAge = age
        } else {
            console.log('Недопустимое значение :(')
        }
    }

}

ivan = new User4('Ivan', 10)
ivan.say()

ivan.name = 'Stepan'
ivan.setAge(30)

ivan.say()


class User5 {
    constructor(name, age) {
        this.name = name
        this._age = age
    }

    say() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`)
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 150) {
            this._age = age
        } else {
            console.log('Недопустимое значение :(')
        }
    }
}

ivan = new User5('Ivan', 10)
ivan.say()

ivan.age = 30

ivan.say()
