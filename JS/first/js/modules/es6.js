import debug from "../main";

function es6(debugMode=false) {

// Class
function User(name, id) {
    this.name = name
    this.id = id
    this.human = true
    this.hello = () => {
        debug(`Hello ${this.name}, id= ${id}`, debugMode)
    }
}

User.prototype.allInfo = function () {
    debug(`Name ${this.name}`, debugMode)
    debug(`Id ${this.id}`, debugMode)
    debug(`Human ${this.human}`, debugMode)
}

let ivan = new User('Ivan', 666)
ivan.hello()
    debug(ivan)
ivan.allInfo()

//es6
class UserV2 {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.human = true
    }

    hello() {
        debug(`Hello ${this.name}, id= ${this.id}`, debugMode)
    }

    allInfo() {
        debug(`Name ${this.name}`, debugMode)
        debug(`Id ${this.id}`, debugMode)
        debug(`Human ${this.human}`, debugMode)
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

debug(persone.userAge = 30)
    debug(persone.userAge)

//Инкапсуляция

function User3(name, age) {
    this.name = name
    this.age = age

    this.say = function () {
        debug(`Имя пользователя: ${this.name}, возраст ${this.age}`, debugMode)
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
        debug(`Имя пользователя: ${this.name}, возраст ${userAge}`,debugMode)
    }

    this.getAge = function () {
        return userAge;
    }

    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 150) {
            userAge = age
        } else {
            debug('Недопустимое значение :(',debugMode)
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
        debug(`Имя пользователя: ${this.name}, возраст ${this._age}`,debugMode)
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 150) {
            this._age = age
        } else {
            debug('Недопустимое значение :(',debugMode)
        }
    }
}

ivan = new User5('Ivan', 10)
ivan.say()

ivan.age = 30

ivan.say()
}
export default es6
