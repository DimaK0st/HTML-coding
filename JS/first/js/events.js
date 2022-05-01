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
