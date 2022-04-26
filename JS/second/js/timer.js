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
