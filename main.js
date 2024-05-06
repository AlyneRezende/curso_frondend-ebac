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

    //parte acima pode ser simplificada com esses dois códigos usando JQuery

    $('form').on('submit', function(e) {
        e.preventDefault()

        let novaImagem = $('#iurl').val()
        let novoItem = $('<li style="display: none"></li>')
        $(`<img src="${novaImagem}" </img>`).appendTo(novoItem)
        $(`
            <div class="imagem-link">
                <a href="${novaImagem}" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()

        $('#iurl').val('')
    })
})

