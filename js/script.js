const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit',(e) =>{
    const nome = frm.inNome.value
    const nota1 = Number.parseFloat(frm.inNotaUm.value)
    const nota2 = Number.parseFloat(frm.inNotaDois.value)

    const media = (nota1 + nota2) / 2

    if (media >= 7) {
        resp1.innerText = `Media das notas ${media}`
        resp2.innerText = `Parabens ${nome}! Você foi aprovado(a)`
        resp2.style.color = 'blue'
    } else if (media >= 4) {
        
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = 'green'
        
    }
    
    
    else {
        resp2.innerText = `Desculpa ${nome}! Você foi reprovado(a)`
        resp2.style.color = 'red'
        
    }

    e.preventDefault()
})