const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.dynamic-btn-block');

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

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        if (event.target.classList.contains('red-btn')) {
            const btns = wrapper.querySelectorAll("button")
            btns[btns.length - 1].remove();
            return;
        }

        if (event.target.classList.contains('green-btn')) {
            const newBtn = document.createElement('button')
            newBtn.innerText = '0'
            wrapper.append(newBtn)
            return;
        }

        const clickBtn = event.target
        clickBtn.classList.toggle('red')
        clickBtn.innerText = ++clickBtn.innerText
    }
})
