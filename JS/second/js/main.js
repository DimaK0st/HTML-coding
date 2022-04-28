window.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 3)
    deadline.setHours(deadline.getHours() + 3)

    hideTabContent()
    showTabContent()

    setClock('.timer', deadline)

    //Render cards
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
})
