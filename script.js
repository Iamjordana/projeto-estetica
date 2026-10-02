const botao = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');
if (botao && menu) {
    botao.addEventListener('click', () => {
        const aberto = menu.classList.toggle('aberto');
        botao.setAttribute('aria-expanded', aberto);
    });
    menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('aberto'); });
}
