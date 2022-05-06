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

export default calc
