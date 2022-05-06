/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/ajax.js":
/*!****************************!*\
  !*** ./js/modules/ajax.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function ajax(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: './img/form/005 spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
      form.insertAdjacentElement('afterend', statusMessage); //v0.0- То как работает под капотом

      const request = new XMLHttpRequest();
      request.open('POST', 'https://626c2fbd50a310b8a341637f.mockapi.io/test/ajax/aqwer');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      const formData = new FormData(form);
      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      request.send(json);
      request.addEventListener('load', () => {
        if (request.status === 201) {
          statusMessage.remove();
          showThanksModal(message.success);
          form.reset();
        } else {
          showThanksModal(message.failure);
        }
      }); // const formData = new FormData(form)
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
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.visibilityModal)(true, '.modal', modalTimerId);
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
    </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
    }, 4000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ajax);

/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function calc() {
  const result = document.querySelector('.calculating__result span');
  let sex,
      ratio = 1.375,
      height,
      weight,
      age;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', sex);
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', ratio);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(`${selector} div`);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);
      console.log(elem);

      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        console.log('xet');
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        console.log('ratio');
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings('#gender', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '0';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + (9.2 + weight) + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }

    console.log(result.textContent);
  }

  calcTotal();

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(`${selector} div`);
    elements.forEach(elem => {
      elem.addEventListener('click', e => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', ratio);
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', sex);
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStaticInformation('#gender', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.value = '';
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;

        case 'weight':
          weight = +input.value;
          break;

        case 'age':
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/first-slider.js":
/*!************************************!*\
  !*** ./js/modules/first-slider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function firstSlider() {
  const slides1 = document.querySelectorAll('.first .offer__slide'),
        prev1 = document.querySelector('.first .offer__slider-prev'),
        next1 = document.querySelector('.first .offer__slider-next'),
        total1 = document.querySelector('#total1'),
        current1 = document.querySelector('#current1');
  let sliderIndex1 = 1;

  if (slides1.length < 10) {
    total1.textContent = `0${slides1.length}`;
  } else {
    total1.textContent = slides1.length;
  }

  console.log(slides1);

  function showSlides() {
    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sliderIndex1;

    if (n > slides1.length) {
      sliderIndex1 = 1;
    }

    if (n < 1) {
      sliderIndex1 = slides1.length;
    }

    slides1.forEach(item => item.style.display = 'none');
    slides1[sliderIndex1 - 1].style.display = 'block';

    if (sliderIndex1 < 10) {
      current1.textContent = `0${sliderIndex1}`;
    } else {
      current1.textContent = sliderIndex1;
    }
  }

  function counterSlides(n) {
    showSlides(sliderIndex1 += n);
  }

  prev1.addEventListener('click', () => {
    counterSlides(-1);
  });
  next1.addEventListener('click', () => {
    counterSlides(1);
  });
  showSlides();
}

/* harmony default export */ __webpack_exports__["default"] = (firstSlider);

/***/ }),

/***/ "./js/modules/menuCard.js":
/*!********************************!*\
  !*** ./js/modules/menuCard.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function menuCard() {
  class MenuCard {
    constructor(src, alt, title, description, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.price = price;
      this.parent = document.querySelector(parentSelector);

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const el = document.createElement('div');

      if (this.classes.length === 0) {
        this.el = 'menu__item';
        el.classList.add(this.el);
      } else {
        this.classes.forEach(className => el.classList.add(className));
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
        `;
      this.parent.append(el);
    }

  } //Render cards
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


  new MenuCard('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
                овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой
                и высоким качеством!`, 9, '.menu .container').render();
  new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и
    качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в
    ресторан!`, 15, '.menu .container').render();
  new MenuCard('img/tabs/post.jpg', 'post', 'Меню "Постное"', `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
                    продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество
                    белков за счет тофу и импортных вегетарианских стейков.`, 20, '.menu .container', 'menu__item', 'box').render();
}

/* harmony default export */ __webpack_exports__["default"] = (menuCard);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visibilityModal": function() { return /* binding */ visibilityModal; }
/* harmony export */ });
function visibilityModal(bool, modalSelector, idModalTimer) {
  modal = document.querySelector(modalSelector);

  if (bool) {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (idModalTimer) {
      clearTimeout(idModalTimer);
    }
  } else {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function modal(triggerSelector, modalSelector, idModalTimer) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      visibilityModal(true, modalSelector, idModalTimer);
    });
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') === '') {
      visibilityModal(false, modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      visibilityModal(false, modalSelector);
    }
  });
  window.addEventListener('scroll', showModalByScroll);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      visibilityModal(true, modalSelector, idModalTimer);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./js/modules/second-slider.js":
/*!*************************************!*\
  !*** ./js/modules/second-slider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function secondSlider(_ref) {
  let {
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
  } = _ref;
  const slides2 = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev2 = document.querySelector(prevArrow),
        next2 = document.querySelector(nextArrow),
        total2 = document.querySelector(totalCounter),
        current2 = document.querySelector(currentCounter),
        sliderWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        widthWrapper = window.getComputedStyle(sliderWrapper).width;
  let sliderIndex = 1,
      offset = 0;
  total2.textContent = getZero(slides2.length);
  current2.textContent = getZero(sliderIndex);
  slidesField.style.width = 100 * slides2.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '1s all';
  sliderWrapper.style.overflow = 'hidden';
  slides2.forEach(slide => {
    slide.style.width = widthWrapper;
  });
  slider.style.position = 'relative';
  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides2.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    i === 0 ? dot.style.opacity = 1 : '';
    indicators.append(dot);
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }

  next2.addEventListener('click', () => {
    if (offset === deleteNotDigits(widthWrapper) * (slides2.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex === slides2.length) {
      sliderIndex = 1;
    } else {
      sliderIndex++;
    }

    if (slides2.length < 10) {
      current2.textContent = `0${sliderIndex}`;
    } else {
      current2.textContent = sliderIndex;
    }

    dots.forEach(dot => {
      dot.style.opacity = '.5';
      dots[sliderIndex - 1].style.opacity = 1;
    });
  });
  prev2.addEventListener('click', () => {
    if (offset === 0) {
      offset = deleteNotDigits(widthWrapper) * (slides2.length - 1);
    } else {
      offset -= deleteNotDigits(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex === 1) {
      sliderIndex = slides2.length;
    } else {
      sliderIndex--;
    }

    current2.textContent = getZero(sliderIndex);
    dots.forEach(dot => {
      dot.style.opacity = '.5';
      dots[sliderIndex - 1].style.opacity = 1;
    });
  });
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      sliderIndex = slideTo;
      offset = deleteNotDigits(widthWrapper) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      current2.textContent = getZero(sliderIndex);
      dots.forEach(dot => {
        dot.style.opacity = '.5';
        dots[sliderIndex - 1].style.opacity = 1;
      });
    });
  });

  function getZero(num) {
    return num >= 0 && num < 10 ? `0${num}` : num;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (secondSlider);

/***/ }),

/***/ "./js/modules/tab.js":
/*!***************************!*\
  !*** ./js/modules/tab.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function tab(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
  hideTabContent();
  showTabContent();

  function hideTabContent() {
    tabsContent.forEach(tab => {
      tab.classList.add('hide');
      tab.classList.remove('show', 'fade');
    });
    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    let item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[item].classList.add('show', 'fade');
    tabsContent[item].classList.remove('hide');
    tabs[item].classList.add('tabheader__item_active');
  }

  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tab);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function timer(idSelector, deadline) {
  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - new Date();
    return {
      'total': t,
      'days': Math.floor(t / (1000 * 60 * 60 * 24)),
      'hours': Math.floor(t / (1000 * 60 * 60) % 24),
      'minutes': Math.floor(t / 1000 / 60 % 60),
      'seconds': Math.floor(t / 1000 % 60)
    };
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function getZero(num) {
      return num >= 0 && num < 10 ? `0${num}` : num;
    }

    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(idSelector, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": function() { return /* binding */ getResource; },
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, json) => {
  const res = await fetch(url, {
    method: 'POST',
    body: json,
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    }
  });
  return await res.json();
};

const getResource = async (url, json) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};



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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ajax */ "./js/modules/ajax.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_first_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/first-slider */ "./js/modules/first-slider.js");
/* harmony import */ var _modules_second_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/second-slider */ "./js/modules/second-slider.js");
/* harmony import */ var _modules_menuCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menuCard */ "./js/modules/menuCard.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tab */ "./js/modules/tab.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");








window.addEventListener('DOMContentLoaded', () => {
  const idModalTimer = setTimeout(() => {
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_5__.visibilityModal)(true, '.modal', idModalTimer);
  }, 10000);
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 3);
  deadline.setHours(deadline.getHours() + 3);
  (0,_modules_ajax__WEBPACK_IMPORTED_MODULE_0__["default"])('form', idModalTimer);
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_first_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_second_slider__WEBPACK_IMPORTED_MODULE_3__["default"])({
    container: '.offer .second',
    slide: '.second .offer__slide',
    nextArrow: '.second .offer__slider-next',
    prevArrow: '.second .offer__slider-prev',
    totalCounter: '#total2',
    currentCounter: '#current2',
    wrapper: '.second .offer__slider-wrapper',
    field: '.second .offer__slider-inner'
  });
  (0,_modules_menuCard__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-modal]', '.modal', idModalTimer);
  (0,_modules_tab__WEBPACK_IMPORTED_MODULE_6__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_7__["default"])('.timer', deadline);
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map