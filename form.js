let a = document.getElementById('txt1')
let b = document.getElementById('txt2')
let res = document.getElementById('res')

function verificar() {
    let A = Number(a.value)
    let B = Number(b.value)

    if (a.value.length == 0 || b.value.length == 0) {
        res.innerHTML = '[ERRO] Por favor, preencha os campos!'
    } else if (A < B) {
            res.innerHTML = `<br>O número B, <strong>${B}</strong>, é <strong>maior</strong> que o número A, <strong>${A}</strong>!`
    } else {
            res.innerHTML = '[ERRO] O número <strong>A</strong> deve ser maior que <strong>B</strong>!'
        }
    }     
