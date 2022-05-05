function modal() {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                visibilityModal(true)
            })
        }
    )

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            visibilityModal(false)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            visibilityModal(false)
        }
    })

    const idModalTimer = setTimeout(() => {
        visibilityModal(true)
    }, 10000)

    window.addEventListener('scroll', showModalByScroll)


    function visibilityModal(bool) {
        if (bool) {
            modal.classList.add('show')
            modal.classList.remove('hide')
            document.body.style.overflow = 'hidden'
            clearTimeout(idModalTimer)
        } else {
            modal.classList.add('hide')
            modal.classList.remove('show')
            document.body.style.overflow = ''
        }
    }

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            visibilityModal(true)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }
}

module.exports = modal
