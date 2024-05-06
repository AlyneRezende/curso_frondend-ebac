$(document).ready(function(){
    $('button').click(function(){
        $('form')
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        let tarefa = $('#tarefa-adicionada').val()
        let novaTarefa = $('<li style="display: none"></li>')

        $(`<li> ${tarefa} </li>`).appendTo(novaTarefa)

        $(novaTarefa).appendTo('ul')

        $('#tarefa-adicionada').val('')
    })
})