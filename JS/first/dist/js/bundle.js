/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debug)
/* harmony export */ });
/* harmony import */ var _modules_arrayFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/arrayFunc */ "./js/modules/arrayFunc.js");
/* harmony import */ var _modules_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/errors */ "./js/modules/errors.js");
/* harmony import */ var _modules_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/es6 */ "./js/modules/es6.js");
/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/events */ "./js/modules/events.js");
/* harmony import */ var _modules_fetchAndAjax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fetchAndAjax */ "./js/modules/fetchAndAjax.js");
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/localStorage */ "./js/modules/localStorage.js");
/* harmony import */ var _modules_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/promise */ "./js/modules/promise.js");
/* harmony import */ var _modules_regularExp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/regularExp */ "./js/modules/regularExp.js");










window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_arrayFunc__WEBPACK_IMPORTED_MODULE_0__["default"])()
    ;(0,_modules_errors__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_modules_es6__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_modules_events__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_modules_fetchAndAjax__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_5__["default"])()
    ;(0,_modules_promise__WEBPACK_IMPORTED_MODULE_6__["default"])()
    ;(0,_modules_regularExp__WEBPACK_IMPORTED_MODULE_7__["default"])()

})


function debug(log, bool) {
    bool ? console.log(log) : '';
}


/***/ }),

/***/ "./js/modules/arrayFunc.js":
/*!*********************************!*\
  !*** ./js/modules/arrayFunc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./js/main.js");
/* harmony import */ var _second_js_modules_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../second/js/modules/ajax */ "../second/js/modules/ajax.js");



function arrayFunc(debugMode=false) {

//------------------Работа с массивами------------------
//filter
    (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('filter', debugMode)
    let arr = ['Ivan', 'Stepan', 'Ann', 'John']
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(arr, debugMode)

    let result = arr.filter(function (name) {
        return name.length < 5
    })
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(result, debugMode)

//map
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('map', debugMode)
    arr = ['IvAn', 'StEpAn', 'ANN', 'John']

    result = arr.map((item) => {
        return item.toLowerCase()
    })
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(arr, debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(result, debugMode)

//every/some
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('every/some', debugMode)

    arr = [4, 'StEpAn', 'ANN', 'John']
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(arr.some(item => typeof (item) === 'number'), debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(arr.every(item => typeof (item) === 'number'), debugMode)


    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Reduce', debugMode)
    arr = [3, 5, 7, 9, 2, 3]
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(arr, debugMode)
// 0           3
// 3           5
// 8           7
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(arr.reduce((sum, current) => sum + current), debugMode)

    const obj = {
        ivan: 'persone',
        ann: 'persone',
        dog: 'animal',
        cat: 'animal',
    }

    const newArr = Object.entries(obj)
        .filter((item) => {
            return item[1] === 'persone'
        })
        .map(item => item[0])


    for (let i = 0; i < 5; i++) {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(i, debugMode)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFunc);


/***/ }),

/***/ "./js/modules/errors.js":
/*!******************************!*\
  !*** ./js/modules/errors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./js/main.js");


function errors(debugMode=false) {

    (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('start', debugMode)
try{
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('process1', debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(a, debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('process1', debugMode)
}catch (e){
    (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('process error', debugMode)
}
    (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('end', debugMode)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errors);


/***/ }),

/***/ "./js/modules/es6.js":
/*!***************************!*\
  !*** ./js/modules/es6.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./js/main.js");


function es6(debugMode=false) {

// Class
function User(name, id) {
    this.name = name
    this.id = id
    this.human = true
    this.hello = () => {
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Hello ${this.name}, id= ${id}`, debugMode)
    }
}

User.prototype.allInfo = function () {
    (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Name ${this.name}`, debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Id ${this.id}`, debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Human ${this.human}`, debugMode)
}

let ivan = new User('Ivan', 666)
ivan.hello()
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(ivan)
ivan.allInfo()

//es6
class UserV2 {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.human = true
    }

    hello() {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Hello ${this.name}, id= ${this.id}`, debugMode)
    }

    allInfo() {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Name ${this.name}`, debugMode)
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Id ${this.id}`, debugMode)
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Human ${this.human}`, debugMode)
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

;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(persone.userAge = 30)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(persone.userAge)

//Инкапсуляция

function User3(name, age) {
    this.name = name
    this.age = age

    this.say = function () {
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Имя пользователя: ${this.name}, возраст ${this.age}`, debugMode)
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
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Имя пользователя: ${this.name}, возраст ${userAge}`,debugMode)
    }

    this.getAge = function () {
        return userAge;
    }

    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 150) {
            userAge = age
        } else {
            (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Недопустимое значение :(',debugMode)
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
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(`Имя пользователя: ${this.name}, возраст ${this._age}`,debugMode)
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 150) {
            this._age = age
        } else {
            (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Недопустимое значение :(',debugMode)
        }
    }
}

ivan = new User5('Ivan', 10)
ivan.say()

ivan.age = 30

ivan.say()
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (es6);


/***/ }),

/***/ "./js/modules/events.js":
/*!******************************!*\
  !*** ./js/modules/events.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function events(debugMode=false) {

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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);


/***/ }),

/***/ "./js/modules/fetchAndAjax.js":
/*!************************************!*\
  !*** ./js/modules/fetchAndAjax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./js/main.js");


function ajax(debugMode = false) {

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
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(i, debugMode)
    }

//-----------Fetch API---------------

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(json,debugMode))

    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Get method', debugMode)

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Ivan'}),
        headers: {'Content-type': 'application/json'}

    })
        .then(response => response.json())
        .then(json => (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(json, debugMode))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajax);


/***/ }),

/***/ "./js/modules/localStorage.js":
/*!************************************!*\
  !*** ./js/modules/localStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function localStorages(debugMode=false) {
    localStorage.setItem('number', 5)

    localStorage.getItem('number')

    localStorage.removeItem('number')
    localStorage.clear()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorages);


/***/ }),

/***/ "./js/modules/promise.js":
/*!*******************************!*\
  !*** ./js/modules/promise.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./js/main.js");


function promise(debugMode = false) {
//-----------------Promise-----------------
    (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Promise: ', debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Отправка данных', debugMode)

    const test1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Подготовка данных')

            const data = {
                firstName: 'Slava',
                lastName: 'Ukraini'
            }
            resolve(data)

        }, 1000)
    }).then((data) => {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Получение данных', debugMode)
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(data, debugMode)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.status = 'order'
                // resolve(data)
                reject()
            }, 1000)
        })
    }).then((data) => {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Обновленные данные', debugMode)
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(data, debugMode)
        data.modify = true
        return data
    }).then((data) => {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Модифицированные данные', debugMode)
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(data, debugMode)
    }).catch(() => {
        console.error('Ошибка вызванная reject', debugMode)
    }).finally(() => {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Промис закончил выполнение :)', debugMode)
    })

    const test2 = new Promise(() => {
        ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Test2', debugMode)
    })

    Promise.all([test1, test2]).then(() => {
            ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Два промиса выполнились', debugMode)
        }
    )

    Promise.race([test1, test2]).then(() => {
            ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Первый  промис быстрее', debugMode)
        }
    )
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promise);


/***/ }),

/***/ "./js/modules/regularExp.js":
/*!**********************************!*\
  !*** ./js/modules/regularExp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./js/main.js");


function regular(debugMode=false) {

    (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])('Regular',debugMode)
    const ans = 'Николай'

    const reg = /н/ig

    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(ans.match(reg),debugMode)

    const pass = 'dasdfsdfg'
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(pass,debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])( pass.replace(/./g, '*'),debugMode)

    const str = '12-34-56'
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(str,debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])( str.replace(/-/g, ':'),debugMode)

    const test = 'fasdfasdfp'
    const testReg = /p/ig
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(test,debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])( testReg.test(test),debugMode)

    const numb = 'fasdf3324asdfp'
    const numbReg = /\d/g
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(numb,debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(numb.match(numbReg),debugMode)

    const searchName = 'My name is R2D2'
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(searchName,debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(searchName.match(/\w\d\w\d/),debugMode)

    const searchSymbols = 'My name is R2D2'
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(searchSymbols,debugMode)
    ;(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])(searchSymbols.match(/\D/g),debugMode)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regular);


/***/ }),

/***/ "../second/js/modules/ajax.js":
/*!************************************!*\
  !*** ../second/js/modules/ajax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "../second/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "../second/js/services/services.js");



function ajax(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: './img/form/005 spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    forms.forEach(item => {
        bindPostData(item)
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let statusMessage = document.createElement('img')
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `
            form.insertAdjacentElement('afterend', statusMessage)

            //v0.0- То как работает под капотом

            const request = new XMLHttpRequest()
            request.open('POST', 'https://626c2fbd50a310b8a341637f.mockapi.io/test/ajax/aqwer');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form)

            const object = {}
            formData.forEach(function (value, key) {
                object[key] = value;
            })
            const json = JSON.stringify(object)

            request.send(json)

            request.addEventListener('load', () => {
                if (request.status === 201) {
                    statusMessage.remove()
                    showThanksModal(message.success)
                    form.reset()
                } else {
                    showThanksModal(message.failure)
                }
            });

            // const formData = new FormData(form)
            // const json = JSON.stringify(Object.fromEntries(formData.entries()))
            //
            // postData('http://localhost:3000/requests', json)
            //     .then((data) => {
            //         console.log(data)
            //         statusMessage.remove()
            //         showThanksModal(message.success)
            //     }).catch(() => {
            //     showThanksModal(message.failure)
            // }).finally(() => {
            //     form.reset()
            // })

        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')

        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.visibilityModal)(true, '.modal', modalTimerId)

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
    <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
    </div>
    `

        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
        }, 4000)
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajax);


/***/ }),

/***/ "../second/js/modules/modal.js":
/*!*************************************!*\
  !*** ../second/js/modules/modal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "visibilityModal": () => (/* binding */ visibilityModal)
/* harmony export */ });
function visibilityModal(bool, modalSelector,idModalTimer) {
    modal = document.querySelector(modalSelector);
    if (bool) {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        if (idModalTimer){
        clearTimeout(idModalTimer)}
    } else {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }
}


function modal(triggerSelector, modalSelector, idModalTimer) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                visibilityModal(true, modalSelector, idModalTimer)
            })
        }
    )

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            visibilityModal(false, modalSelector)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            visibilityModal(false, modalSelector)
        }
    })

    window.addEventListener('scroll', showModalByScroll)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            visibilityModal(true, modalSelector, idModalTimer)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "../second/js/services/services.js":
/*!*****************************************!*\
  !*** ../second/js/services/services.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, json) => {
    const res = await fetch(url, {
            method: 'POST',
            body: json,
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        }
    )

    return await res.json()
}

const getResource = async (url, json) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`)
    }

    return await res.json()
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map