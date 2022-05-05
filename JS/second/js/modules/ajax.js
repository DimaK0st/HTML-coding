function ajax() {
    const forms = document.querySelectorAll('form');
    const message = {
        loading: './img/form/005 spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    forms.forEach(item => {
        bindPostData(item)
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let statusMessage = document.createElement('img')
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `
            form.insertAdjacentElement('afterend', statusMessage)

            //v0.0- То как работает под капотом

            const request = new XMLHttpRequest()
            request.open('POST', 'https://626c2fbd50a310b8a341637f.mockapi.io/test/ajax/aqwer');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form)

            const object = {}
            formData.forEach(function (value, key) {
                object[key] = value;
            })
            const json = JSON.stringify(object)

            request.send(json)

            request.addEventListener('load', () => {
                if (request.status === 201) {
                    statusMessage.remove()
                    showThanksModal(message.success)
                    form.reset()
                } else {
                    showThanksModal(message.failure)
                }
            });

            // const formData = new FormData(form)
            // const json = JSON.stringify(Object.fromEntries(formData.entries()))
            //
            // postData('http://localhost:3000/requests', json)
            //     .then((data) => {
            //         console.log(data)
            //         statusMessage.remove()
            //         showThanksModal(message.success)
            //     }).catch(() => {
            //     showThanksModal(message.failure)
            // }).finally(() => {
            //     form.reset()
            // })

        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')

        prevModalDialog.classList.add('hide');
        visibilityModal(true)

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
    <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
    </div>
    `

        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
        }, 4000)
    }

    const postData = async (url, json) => {
        const res = await fetch(url, {
                method: 'POST',
                body: json,
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                }
            }
        )

        return await res.json()
    }

    const getResource = async (url, json) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }

        return await res.json()
    }
}

module.exports = ajax;
