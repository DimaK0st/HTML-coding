window.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 3)
    deadline.setHours(deadline.getHours() + 3)

    hideTabContent()
    showTabContent()

    setClock('.timer', deadline)
})
