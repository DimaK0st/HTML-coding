function visibilityModal(bool, modalSelector,idModalTimer) {
    modal = document.querySelector(modalSelector);
    if (bool) {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        if (idModalTimer){
        clearTimeout(idModalTimer)}
    } else {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }
}


function modal(triggerSelector, modalSelector, idModalTimer) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                visibilityModal(true, modalSelector, idModalTimer)
            })
        }
    )

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            visibilityModal(false, modalSelector)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            visibilityModal(false, modalSelector)
        }
    })

    window.addEventListener('scroll', showModalByScroll)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            visibilityModal(true, modalSelector, idModalTimer)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }


}

export default modal
export {visibilityModal}
