function secondSlider({container, slide,nextArrow,prevArrow,totalCounter,currentCounter,wrapper,field}) {
    const slides2 = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev2 = document.querySelector(prevArrow),
        next2 = document.querySelector(nextArrow),
        total2 = document.querySelector(totalCounter),
        current2 = document.querySelector(currentCounter),
        sliderWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
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

export default secondSlider
