window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    hideTabContent()
    showTabContent()

    function hideTabContent() {
        tabsContent.forEach((tab) => {
            tab.classList.add('hide')
            tab.classList.remove('show', 'fade')
        })

        tabs.forEach(tab =>{
            tab.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(item = 0){
        tabsContent[item].classList.add('show', 'fade')
        tabsContent[item].classList.remove('hide')
        tabs[item].classList.add('tabheader__item_active')
    }

    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) =>{
                if (target === item){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
})
