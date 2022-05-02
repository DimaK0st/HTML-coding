window.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 3)
    deadline.setHours(deadline.getHours() + 3)

    hideTabContent()
    showTabContent()
    showSlides()

    setClock('.timer', deadline)

    //Render cards

    // getResource('http://localhost:3000/menu')
    //     .then(data =>{
    //         data.map(({img,altimg,title,descr,price})=>{
    //             new MenuCard(img,altimg,title,descr,price, '.menu .container').render()
    //         })
    //     })

    axios.get('http://localhost:3000/menu')
        .then(data =>{
                    data.data.map(({img,altimg,title,descr,price})=>{
                        new MenuCard(img,altimg,title,descr,price, '.menu .container').render()
                    })
        })
})
