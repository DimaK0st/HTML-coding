//-----------------Promise-----------------
console.log('Promise: ')
console.log('Отправка данных')

const test1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных')

        const data = {
            firstName: 'Slava',
            lastName: 'Ukraini'
        }
        resolve(data)

    }, 1000)
}).then((data) => {
    console.log('Получение данных')
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = 'order'
            // resolve(data)
            reject()
        }, 1000)
    })
}).then((data) => {
    console.log('Обновленные данные')
    console.log(data)
    data.modify = true
    return data
}).then((data) => {
    console.log('Модифицированные данные')
    console.log(data)
}).catch(() => {
    console.error('Ошибка вызванная reject')
}).finally(() => {
    console.log('Промис закончил выполнение :)')
})

const test2 = new Promise(() => {
    console.log('Test2')
})

Promise.all([test1, test2]).then(() => {
        console.log('Два промиса выполнились')
    }
)

Promise.race([test1, test2]).then(() => {
        console.log('Первый  промис быстрее')
    }
)

