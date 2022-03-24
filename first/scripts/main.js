window.onscroll = function ()
{
    let header = document.getElementById('header-web')

    console.log(header)
    if(window.scrollY>5){
        header.style.background ='rgba(0,0,0,0.38)'
    }
    else {
        header.style.background = 'rgba(0, 0, 0, 0)'
    }

}
