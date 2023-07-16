function tab(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    hideTabContent()
    showTabContent()

    function hideTabContent() {
        tabsContent.forEach((tab) => {
            tab.classList.add('hide')
            tab.classList.remove('show', 'fade')
        })

        tabs.forEach(tab => {
            tab.classList.remove(activeClass)
        })
    }

    function showTabContent(item = 0) {
        tabsContent[item].classList.add('show', 'fade')
        tabsContent[item].classList.remove('hide')
        tabs[item].classList.add('tabheader__item_active')
    }

    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}

export default tab
