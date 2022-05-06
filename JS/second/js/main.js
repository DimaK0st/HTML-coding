import ajax from './modules/ajax';
import calc from './modules/calc';
import firstSlider from './modules/first-slider';
import secondSlider from './modules/second-slider';
import menuCard from './modules/menuCard';
import modal, {visibilityModal} from './modules/modal';
import tab from './modules/tab';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {

    const idModalTimer = setTimeout(() => {
        visibilityModal(true, '.modal', idModalTimer)
    }, 10000)

    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 3)
    deadline.setHours(deadline.getHours() + 3)

    ajax('form', idModalTimer)
    calc()
    firstSlider()
    secondSlider({
        container: '.offer .second',
        slide: '.second .offer__slide',
        nextArrow: '.second .offer__slider-next',
        prevArrow: '.second .offer__slider-prev',
        totalCounter: '#total2',
        currentCounter: '#current2',
        wrapper: '.second .offer__slider-wrapper',
        field: '.second .offer__slider-inner'
    })
    menuCard()
    modal('[data-modal]', '.modal', idModalTimer)
    tab('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    timer('.timer', deadline)
})
