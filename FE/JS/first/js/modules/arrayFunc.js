import debug from "../main";
import ajax from "../../../second/js/modules/ajax";

function arrayFunc(debugMode=false) {

//------------------Работа с массивами------------------
//filter
    debug('filter', debugMode)
    let arr = ['Ivan', 'Stepan', 'Ann', 'John']
    debug(arr, debugMode)

    let result = arr.filter(function (name) {
        return name.length < 5
    })
    debug(result, debugMode)

//map
    debug('map', debugMode)
    arr = ['IvAn', 'StEpAn', 'ANN', 'John']

    result = arr.map((item) => {
        return item.toLowerCase()
    })
    debug(arr, debugMode)
    debug(result, debugMode)

//every/some
    debug('every/some', debugMode)

    arr = [4, 'StEpAn', 'ANN', 'John']
    debug(arr.some(item => typeof (item) === 'number'), debugMode)
    debug(arr.every(item => typeof (item) === 'number'), debugMode)


    debug('Reduce', debugMode)
    arr = [3, 5, 7, 9, 2, 3]
    debug(arr, debugMode)
// 0           3
// 3           5
// 8           7
    debug(arr.reduce((sum, current) => sum + current), debugMode)

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
        debug(i, debugMode)
    }
}

export default arrayFunc
