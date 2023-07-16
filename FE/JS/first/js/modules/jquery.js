import $ from 'jquery'

function jquery() {

    $(document).ready(function () {
        $('.list-item:first').hover(function () {
            $(this).toggleClass('active');
        })

        $('.list-item:eq(1)').on('click', function (){
            $('.image:even').fadeToggle('show')
        })

        $('.list-item:eq(2)').on('click', function (){
            $('.image:odd').animate({
                opacity: 'toggle',
                height: 'toggle'
            }, 1000)
        })
    })


}

export default jquery
