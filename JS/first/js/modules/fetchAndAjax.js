import debug from "../main";

function ajax(debugMode = false) {

// ---------------------AJAX-------------------------

    const inputUah = document.querySelector('#uah'),
        inputUsd = document.querySelector('#usd')

    inputUah.addEventListener('change', () => {
        const request = new XMLHttpRequest();

        request.open('GET', 'https://random-data-api.com/api/number/random_number')
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        request.send()
        request.addEventListener('load', () => {
            if (request.status === 200) {
                const data = JSON.parse(request.response)
                inputUsd.value = (+inputUah.value / data.normal).toFixed(2);
            } else {
                inputUsd.value = 'error';
            }
        })

    })

    for (let i = 0; i < 5; i++) {
        debug(i, debugMode)
    }

//-----------Fetch API---------------

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => debug(json,debugMode))

    debug('Get method', debugMode)

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Ivan'}),
        headers: {'Content-type': 'application/json'}

    })
        .then(response => response.json())
        .then(json => debug(json, debugMode))
}

export default ajax
