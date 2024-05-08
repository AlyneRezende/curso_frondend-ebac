$('button').ready(function(){

    $('#icpf').mask('000.000.000-00')
    $('#itel').mask('(00) 00000-0000')
    $('#icep').mask('00.000-000')
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },

        messages: {
            nome:'Por favor, insira seu nome.',
            email: 'Por favor, insira seu email.',
            tel: 'Por favor, insira seu telefone.',
            cpf: 'Por favor, insira seu CPF.',
            endereco: 'Campo obrigatório.',
            cep: 'Campo obrigatório.'
        }
    })

})