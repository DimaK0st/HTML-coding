window.addEventListener('DOMContentLoaded', () => {
    const ajax = require('./modules/ajax'),
        calc = require('./modules/calc'),
        firstSlider = require('./modules/first-slider'),
        secondSlider = require('./modules/second-slider'),
        menuCard = require('./modules/menuCard'),
        modal = require('./modules/modal'),
        tab = require('./modules/tab'),
        timer = require('./modules/timer')

    ajax()
    calc()
    firstSlider()
    secondSlider()
    menuCard()
    modal()
    tab()
    timer()
})
