/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/ajax.js":
/*!****************************!*\
  !*** ./js/modules/ajax.js ***!
  \****************************/
/***/ ((module) => {

function ajax() {
    const forms = document.querySelectorAll('form');
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
        visibilityModal(true)

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
}

module.exports = ajax;


/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc() {
    const result = document.querySelector('.calculating__result span')
    let sex,
        ratio = 1.375,
        height, weight, age;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex')
    } else {
        sex = 'female'
        localStorage.setItem('sex', sex)
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio')
    } else {
        ratio = 1.375
        localStorage.setItem('ratio', ratio)
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(`${selector} div`)

        elements.forEach(elem => {
            elem.classList.remove(activeClass)
            console.log(elem)
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                console.log('xet')
                elem.classList.add(activeClass)
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                console.log('ratio')
                elem.classList.add(activeClass)
            }
        })
    }

    initLocalSettings('#gender', 'calculating__choose-item_active')
    initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active')

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '0'
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 + weight) + (3.1 * height) - (4.3 * age)) * ratio)
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
        }

        console.log(result.textContent)
    }

    calcTotal()

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(`${selector} div`)

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio')
                    localStorage.setItem('ratio', ratio)
                } else {
                    sex = e.target.getAttribute('id')
                    localStorage.setItem('sex', sex)
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass)
                })

                e.target.classList.add(activeClass)

                calcTotal()
            })
        })
    }

    getStaticInformation('#gender', 'calculating__choose-item_active')
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active')


    function getDynamicInformation(selector) {
        const input = document.querySelector(selector)
        input.value = ''

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red'
            } else {
                input.style.border = 'none'
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value
                    break
                case 'weight':
                    weight = +input.value
                    break
                case 'age':
                    age = +input.value
                    break
            }

            calcTotal()
        })
    }

    getDynamicInformation('#height')
    getDynamicInformation('#weight')
    getDynamicInformation('#age')
}

module.exports = calc


/***/ }),

/***/ "./js/modules/first-slider.js":
/*!************************************!*\
  !*** ./js/modules/first-slider.js ***!
  \************************************/
/***/ ((module) => {

function firstSlider() {
    const slides1 = document.querySelectorAll('.first .offer__slide'),
        prev1 = document.querySelector('.first .offer__slider-prev'),
        next1 = document.querySelector('.first .offer__slider-next'),
        total1 = document.querySelector('#total1'),
        current1 = document.querySelector('#current1')
    let sliderIndex1 = 1

    if (slides1.length < 10) {
        total1.textContent = `0${slides1.length}`
    } else {
        total1.textContent = slides1.length
    }

    console.log(slides1)

    function showSlides(n = sliderIndex1) {
        if (n > slides1.length) {
            sliderIndex1 = 1
        }

        if (n < 1) {
            sliderIndex1 = slides1.length
        }

        slides1.forEach(item => item.style.display = 'none')

        slides1[sliderIndex1 - 1].style.display = 'block'

        if (sliderIndex1 < 10) {
            current1.textContent = `0${sliderIndex1}`
        } else {
            current1.textContent = sliderIndex1
        }

    }

    function counterSlides(n) {
        showSlides(sliderIndex1 += n)
    }

    prev1.addEventListener('click', () => {
        counterSlides(-1)
    })

    next1.addEventListener('click', () => {
        counterSlides(1)
    })

    showSlides()
}

module.exports = firstSlider


/***/ }),

/***/ "./js/modules/menuCard.js":
/*!********************************!*\
  !*** ./js/modules/menuCard.js ***!
  \********************************/
/***/ ((module) => {

function menuCard() {
    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parent = document.querySelector(parentSelector)
            this.classes = classes
            this.transfer = 27
            this.changeToUAH()
        }

        changeToUAH() {
            this.price = this.price * this.transfer
        }

        render() {
            const el = document.createElement('div')

            if (this.classes.length === 0) {
                this.el = 'menu__item'
                el.classList.add(this.el)
            } else {
                this.classes.forEach(className => el.classList.add(className))
            }

            el.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `
            this.parent.append(el)
        }
    }

//Render cards

// getResource('http://localhost:3000/menu')
//     .then(data =>{
//         data.map(({img,altimg,title,descr,price})=>{
//             new MenuCard(img,altimg,title,descr,price, '.menu .container').render()
//         })
//     })

// axios.get('http://localhost:3000/menu')
//     .then(data =>{
//                 data.data.map(({img,altimg,title,descr,price})=>{
//                     new MenuCard(img,altimg,title,descr,price, '.menu .container').render()
//                 })
//     })

//git version
    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
                овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой
                и высоким качеством!`,
        9,
        '.menu .container'
    ).render()
    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и
    качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в
    ресторан!`,
        15,
        '.menu .container'
    ).render()
    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
                    продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество
                    белков за счет тофу и импортных вегетарианских стейков.`,
        20,
        '.menu .container',
        'menu__item',
        'box',
    ).render()
}

module.exports = menuCard


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                visibilityModal(true)
            })
        }
    )

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            visibilityModal(false)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            visibilityModal(false)
        }
    })

    const idModalTimer = setTimeout(() => {
        visibilityModal(true)
    }, 10000)

    window.addEventListener('scroll', showModalByScroll)


    function visibilityModal(bool) {
        if (bool) {
            modal.classList.add('show')
            modal.classList.remove('hide')
            document.body.style.overflow = 'hidden'
            clearTimeout(idModalTimer)
        } else {
            modal.classList.add('hide')
            modal.classList.remove('show')
            document.body.style.overflow = ''
        }
    }

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            visibilityModal(true)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }
}

module.exports = modal


/***/ }),

/***/ "./js/modules/second-slider.js":
/*!*************************************!*\
  !*** ./js/modules/second-slider.js ***!
  \*************************************/
/***/ ((module) => {

function secondSlider() {
    const slides2 = document.querySelectorAll('.second .offer__slide'),
        slider = document.querySelector('.offer .second'),
        prev2 = document.querySelector('.second .offer__slider-prev'),
        next2 = document.querySelector('.second .offer__slider-next'),
        total2 = document.querySelector('#total2'),
        current2 = document.querySelector('#current2'),
        sliderWrapper = document.querySelector('.second .offer__slider-wrapper'),
        slidesField = document.querySelector('.second .offer__slider-inner'),
        widthWrapper = window.getComputedStyle(sliderWrapper).width

    let sliderIndex = 1,
        offset = 0

    total2.textContent = getZero(slides2.length)
    current2.textContent = getZero(sliderIndex)

    slidesField.style.width = 100 * slides2.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '1s all'

    sliderWrapper.style.overflow = 'hidden'

    slides2.forEach(slide => {
        slide.style.width = widthWrapper
    })

    slider.style.position = 'relative'

    const indicators = document.createElement('ol'),
        dots = []
    indicators.classList.add('carousel-indicators')
    slider.append(indicators)

    for (let i = 0; i < slides2.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('dot')
        i === 0 ? dot.style.opacity = 1 : '';
        indicators.append(dot)
        dots.push(dot)
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '')
    }

    next2.addEventListener('click', () => {
        if (offset === deleteNotDigits(widthWrapper) * (slides2.length - 1)) {
            offset = 0
        } else {
            offset += deleteNotDigits(widthWrapper)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (sliderIndex === slides2.length) {
            sliderIndex = 1
        } else {
            sliderIndex++
        }

        if (slides2.length < 10) {
            current2.textContent = `0${sliderIndex}`
        } else {
            current2.textContent = sliderIndex
        }

        dots.forEach(dot => {
            dot.style.opacity = '.5'
            dots[sliderIndex - 1].style.opacity = 1
        })
    })

    prev2.addEventListener('click', () => {
        if (offset === 0) {
            offset = deleteNotDigits(widthWrapper) * (slides2.length - 1)
        } else {
            offset -= deleteNotDigits(widthWrapper)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (sliderIndex === 1) {
            sliderIndex = slides2.length
        } else {
            sliderIndex--
        }

        current2.textContent = getZero(sliderIndex)

        dots.forEach(dot => {
            dot.style.opacity = '.5'
            dots[sliderIndex - 1].style.opacity = 1
        })
    })

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            sliderIndex = slideTo
            offset = deleteNotDigits(widthWrapper) * (slideTo - 1)
            slidesField.style.transform = `translateX(-${offset}px)`

            current2.textContent = getZero(sliderIndex)

            dots.forEach(dot => {
                dot.style.opacity = '.5'
                dots[sliderIndex - 1].style.opacity = 1
            })

        })
    })

    function getZero(num) {
        return (num >= 0 && num < 10) ? `0${num}` : num
    }
}

module.exports = secondSlider


/***/ }),

/***/ "./js/modules/tab.js":
/*!***************************!*\
  !*** ./js/modules/tab.js ***!
  \***************************/
/***/ ((module) => {

function tab() {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    hideTabContent()
    showTabContent()

    function hideTabContent() {
        tabsContent.forEach((tab) => {
            tab.classList.add('hide')
            tab.classList.remove('show', 'fade')
        })

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(item = 0) {
        tabsContent[item].classList.add('show', 'fade')
        tabsContent[item].classList.remove('hide')
        tabs[item].classList.add('tabheader__item_active')
    }

    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}

module.exports = tab


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - new Date;

        return {
            'total': t,
            'days': Math.floor(t / (1000 * 60 * 60 * 24)),
            'hours': Math.floor(t / (1000 * 60 * 60) % 24),
            'minutes': Math.floor((t / 1000 / 60) % 60),
            'seconds': Math.floor((t / 1000) % 60),
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function getZero(num) {
            return (num >= 0 && num < 10) ? `0${num}` : num
        }

        function updateClock() {
            const t = getTimeRemaining(endTime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 3)
    deadline.setHours(deadline.getHours() + 3)

    setClock('.timer', deadline)
}

module.exports = timer


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
window.addEventListener('DOMContentLoaded', () => {
    const ajax = __webpack_require__(/*! ./modules/ajax */ "./js/modules/ajax.js"),
        calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
        firstSlider = __webpack_require__(/*! ./modules/first-slider */ "./js/modules/first-slider.js"),
        secondSlider = __webpack_require__(/*! ./modules/second-slider */ "./js/modules/second-slider.js"),
        menuCard = __webpack_require__(/*! ./modules/menuCard */ "./js/modules/menuCard.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        tab = __webpack_require__(/*! ./modules/tab */ "./js/modules/tab.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js")

    ajax()
    calc()
    firstSlider()
    secondSlider()
    menuCard()
    modal()
    tab()
    timer()
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map