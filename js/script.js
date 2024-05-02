const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const respUser = Number(frm.inNumero.value);
    const qtda = Number(frm.inQuantidade.value);

    let resposta = '';

    for (let i = qtda; i < respUser; i+= qtda) {
        resposta += `${i}\n`;
        resp.innerText = resposta;
    }

});
