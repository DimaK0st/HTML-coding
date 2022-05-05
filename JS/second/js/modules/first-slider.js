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
