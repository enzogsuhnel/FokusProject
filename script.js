const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

focusButton.addEventListener('click', () => {
    alterarContexto('foco');
})

shortButton.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longButton.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`)
}

/*const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const displayTimer= dociment.querySelector('#timer');
const banner = document.querySelector('.app__image');
const tittle = document.querySelector('.app__title');
const changeStatusDisplayTimer = document.querySelector('.app__card-primary-button');
const focusDuration= 1500;
const shortDuration = 300;
const longDuration = 900;

focusButton.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
    banner.setAttribute('src', '/imagens/foco.png');
})

shortButton.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    banner.setAttribute('src', '/imagens/descanso-curso.png');
})

longButton.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', '/imagens/descanso-longo.png');
})*/