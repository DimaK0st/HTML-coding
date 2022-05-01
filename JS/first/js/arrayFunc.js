//------------------Работа с массивами------------------

//filter
console.log('filter')
let arr = ['Ivan', 'Stepan', 'Ann', 'John']
console.info(arr)

let result = arr.filter(function (name) {
    return name.length < 5
})
console.log(result)

//map
console.log('map')
arr = ['IvAn', 'StEpAn', 'ANN', 'John']

result = arr.map((item) => {
    return item.toLowerCase()
})
console.log(arr)
console.log(result)

//every/some
console.log('every/some')

arr = [4, 'StEpAn', 'ANN', 'John']
console.log(arr.some(item => typeof (item) === 'number'))
console.log(arr.every(item => typeof (item) === 'number'))


console.log('Reduce')
arr = [3, 5, 7, 9, 2, 3]
console.log(arr)
// 0           3
// 3           5
// 8           7
console.log('sum', arr.reduce((sum, current) => sum + current))

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
}

const newArr = Object.entries(obj)
    .filter((item) => {
        return item[1] === 'persone'
    })
    .map(item => item[0])



for (let i = 0; i < 5; i++) {
    console.log(i)
}
