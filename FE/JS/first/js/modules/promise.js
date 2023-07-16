import debug from "../main";

function promise(debugMode = false) {
//-----------------Promise-----------------
    debug('Promise: ', debugMode)
    debug('Отправка данных', debugMode)

    const test1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            debug('Подготовка данных')

            const data = {
                firstName: 'Slava',
                lastName: 'Ukraini'
            }
            resolve(data)

        }, 1000)
    }).then((data) => {
        debug('Получение данных', debugMode)
        debug(data, debugMode)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.status = 'order'
                // resolve(data)
                reject()
            }, 1000)
        })
    }).then((data) => {
        debug('Обновленные данные', debugMode)
        debug(data, debugMode)
        data.modify = true
        return data
    }).then((data) => {
        debug('Модифицированные данные', debugMode)
        debug(data, debugMode)
    }).catch(() => {
        console.error('Ошибка вызванная reject', debugMode)
    }).finally(() => {
        debug('Промис закончил выполнение :)', debugMode)
    })

    const test2 = new Promise(() => {
        debug('Test2', debugMode)
    })

    Promise.all([test1, test2]).then(() => {
            debug('Два промиса выполнились', debugMode)
        }
    )

    Promise.race([test1, test2]).then(() => {
            debug('Первый  промис быстрее', debugMode)
        }
    )
}

export default promise
