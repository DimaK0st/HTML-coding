console.warn('Regular')
const ans = 'Николай'

const reg = /н/ig

console.log(ans.match(reg))

const pass = 'dasdfsdfg'
console.log(pass, pass.replace(/./g,'*'))

const str = '12-34-56'
console.log(str, str.replace(/-/g,':'))

const test = 'fasdfasdfp'
const testReg = /p/ig
console.log(test, testReg.test(test))

const numb = 'fasdf3324asdfp'
const numbReg = /\d/g
console.log(numb,numb.match(numbReg))

const searchName = 'My name is R2D2'
console.log(searchName, searchName.match(/\w\d\w\d/))

const searchSymbols = 'My name is R2D2'
console.log(searchSymbols, searchSymbols.match(/\D/g))
