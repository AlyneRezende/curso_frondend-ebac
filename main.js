$(document).ready(function(){
    //console.log(document.querySelector('header button'))
    //console.log($('#botao-cancelar'))


    /*document.querySelector('header button').addEventListener('click', function() {
        alert('Expandir form')
    })*/

    $('header button').click(function() { //maneira mais simplificada que acima
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        console.log('submit')
        e.preventDefault()
    })

})

//parte acima pode ser simplificada com esses dois códigos usando JQuery