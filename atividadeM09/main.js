$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault()

        let tarefa = $('#tarefa-adicionada').val()

        $('<li>').text(tarefa).appendTo('#lista')

        $('#tarefa-adicionada').val('')
    })

    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
})
