function localStorages(debugMode=false) {
    localStorage.setItem('number', 5)

    localStorage.getItem('number')

    localStorage.removeItem('number')
    localStorage.clear()
}

export default localStorages
