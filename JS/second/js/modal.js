const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            visibilityModal(true)
        })
    }
)

modalCloseBtn.addEventListener('click', () => {
    visibilityModal(false)
})
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        visibilityModal(false)
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.code === 'Escape' && modal.classList.contains('show')){
        visibilityModal(false)
    }
})

function visibilityModal(bool) {
    if (bool) {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    } else {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }
}
