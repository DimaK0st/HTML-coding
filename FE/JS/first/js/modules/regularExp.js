import debug from "../main";

function regular(debugMode=false) {

    debug('Regular',debugMode)
    const ans = 'Николай'

    const reg = /н/ig

    debug(ans.match(reg),debugMode)

    const pass = 'dasdfsdfg'
    debug(pass,debugMode)
    debug( pass.replace(/./g, '*'),debugMode)

    const str = '12-34-56'
    debug(str,debugMode)
    debug( str.replace(/-/g, ':'),debugMode)

    const test = 'fasdfasdfp'
    const testReg = /p/ig
    debug(test,debugMode)
    debug( testReg.test(test),debugMode)

    const numb = 'fasdf3324asdfp'
    const numbReg = /\d/g
    debug(numb,debugMode)
    debug(numb.match(numbReg),debugMode)

    const searchName = 'My name is R2D2'
    debug(searchName,debugMode)
    debug(searchName.match(/\w\d\w\d/),debugMode)

    const searchSymbols = 'My name is R2D2'
    debug(searchSymbols,debugMode)
    debug(searchSymbols.match(/\D/g),debugMode)
}

export default regular
