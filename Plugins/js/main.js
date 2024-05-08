        $(document).ready(function(){
            $('.carousel-imagens').slick({
                autoplay:true
            })

            $('.menu-hamburguer').click(function(){
                $('nav').slideToggle()
            })

            $('#itel').mask('(00) 00000-0000', { //para indicar números usamos o 0, para letras usamos S
                placeholder: '(xx) xxxxx-xxxx'
            })

            $('form').validate({
                rules: {
                    nome: { // funciona com a propriedade name, e não id ou type do input
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    tel: {
                        required: true
                    },
                    veiculo: {
                        required: true
                    },
                    msg: {
                        required: true
                    },
                },
                messages: {
                    nome: 'Por favor, insira seu nome.',
                    email: 'Por favor, insira seu email.',
                    tel: 'Por favor, insira seu telefone.',
                    veiculo: 'Campo obrigatório.',
                    msg: 'Campo obrigatório.',
                },
                submitHandler: function(form) {
                    console.log(form)
                },
                invalidHandler: function(evento, validador) {
                    let camposincorretos = validador.numberOfInvalids()

                    if (camposincorretos) {
                        alert (`Exintem ${camposincorretos} campos incorretos`)
                    }
                }
            })
            
            $('.lista-veiculos button').click(function(){
                let destino = $('#contato')
                let nomeVeiculo = $(this).parent().find('h3').text()

                $('#veiculo-interesse').val(nomeVeiculo)

                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000)
            })
        })