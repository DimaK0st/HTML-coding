import debug from "../main";

function generator(debugMode = false) {

    function* gener() {
        yield 'C'
        yield 's'
        yield ':'
        yield 'G'
        yield 'o'
    }

    const str = gener()
    debug(str.next().value, debugMode)
    debug(str.next().value, debugMode)
    debug(str.next().value, debugMode)
    debug(str.next().value, debugMode)
    debug(str.next().value, debugMode)

    function * count(n){
        for (let i=0; i<n;i++){
            yield i
        }
    }

    const counter = count(4)
    debug(counter.next().value, debugMode)
    debug(counter.next().value, debugMode)
    debug(counter.next().value, debugMode)
    debug(counter.next().value, debugMode)
    debug(counter.next().value, debugMode)

    for (let k of count(12)){
        debug(k, debugMode)
    }
}

export default generator
