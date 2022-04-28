class MenuCard {
    constructor(src, alt, title, description, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.price = price;
        this.parent = document.querySelector(parentSelector)
        this.classes = classes
        this.transfer = 27
        this.changeToUAH()
    }

    changeToUAH() {
        this.price = this.price * this.transfer
    }

    render() {
        const el = document.createElement('div')

        if (this.classes.length === 0) {
            this.el = 'menu__item'
            el.classList.add(this.el)
        } else {
            this.classes.forEach(className => el.classList.add(className))
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
        `
        this.parent.append(el)
    }
}
