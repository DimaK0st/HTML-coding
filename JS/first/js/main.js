const btns = document.querySelectorAll('button');
const dynamicWrapper = document.querySelector('.dynamic-btn-block');
const setTimeoutWrapper = document.querySelector('.set-timeout-block');
const setTimeoutCounter = document.querySelector('.set-timeout-counter');
let idInterval, direction;

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red')
    } else {
        btns[1].classList.remove('red')
    }
})

btns[1].addEventListener('click', () => {
    btns[0].classList.toggle('red')
})

dynamicWrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        if (event.target.classList.contains('red-btn')) {
            const btns = dynamicWrapper.querySelectorAll("button")
            btns[btns.length - 1].remove();
            return;
        }

        if (event.target.classList.contains('green-btn')) {
            const newBtn = document.createElement('button')
            newBtn.innerText = '0'
            dynamicWrapper.append(newBtn)
            return;
        }

        const clickBtn = event.target
        clickBtn.classList.toggle('red')
        clickBtn.innerText = ++clickBtn.innerText
    }
})

setTimeoutWrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        if (event.target.classList.contains('add')) {
            direction = true
            clearInterval(idInterval)
            idInterval = setInterval(counterController, 1000)
            return;
        }

        if (event.target.classList.contains('delete')) {
            direction = false
            clearInterval(idInterval)
            idInterval = setInterval(counterController, 1000)
            return;
        }

        if (event.target.classList.contains('stop')) {
            clearInterval(idInterval)
            return;
        }

        const clickBtn = event.target
        clickBtn.classList.toggle('red')
        clickBtn.innerText = ++clickBtn.innerText
    }
})

function counterController() {
    if (direction) {
        setTimeoutWrapper.append(document.createElement('button'))
        setTimeoutCounter.innerText = ++setTimeoutCounter.innerText
    } else {
        const btns = document.querySelector('.set-timeout-block').querySelectorAll("button")
        if (btns.length > 3) {
            setTimeoutCounter.innerText = --setTimeoutCounter.innerText
            btns[btns.length - 1].remove();
        } else {
            clearInterval(idInterval)
        }
    }
}

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

// ---------------------AJAX-------------------------

const inputUah = document.querySelector('#uah'),
    inputUsd = document.querySelector('#usd')

inputUah.addEventListener('change', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://random-data-api.com/api/number/random_number')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response)
            inputUsd.value = (+inputUah.value / data.normal).toFixed(2);
        } else {
            inputUsd.value = 'error';
        }
    })

})

for (let i = 0; i < 5; i++) {
    console.log(i)
}

// -----------------Promise-----------------
console.log('Promise: ')
console.log('Отправка данных')

const test1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных')

        const data = {
            firstName: 'Slava',
            lastName: 'Ukraini'
        }
        resolve(data)

    }, 1000)
}).then((data) => {
    console.log('Получение данных')
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = 'order'
            // resolve(data)
            reject()
        }, 1000)
    })
}).then((data) => {
    console.log('Обновленные данные')
    console.log(data)
    data.modify = true
    return data
}).then((data) => {
    console.log('Модифицированные данные')
    console.log(data)
}).catch(() => {
    console.error('Ошибка вызванная reject')
}).finally(() => {
    console.log('Промис закончил выполнение :)')
})

const test2 = new Promise(() => {
    console.log('Test2')
})

Promise.all([test1, test2]).then(() => {
        console.log('Два промиса выполнились')
    }
)

Promise.race([test1, test2]).then(() => {
        console.log('Первый  промис быстрее')
    }
)


//-----------Fetch API---------------


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

console.log('Get method')

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Ivan'}),
    headers:{'Content-type': 'application/json'}

})
    .then(response => response.json())
    .then(json => console.log(json))

    
