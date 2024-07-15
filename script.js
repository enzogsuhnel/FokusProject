const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const tittle = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const musicFocusInput = document.querySelector('#alternar-musica');
const music = new Audio('./sons/luna-rise-part-one.mp3');
music.loop = true;

musicFocusInput.addEventListener('change', () => {
    if(music.paused) {
        music.play()
    } else {
        music.pause()
    }
})


focusButton.addEventListener('click', () => {
    alterarContexto('foco');
    focusButton.classList.add('active')
})

shortButton.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    shortButton.classList.add('active')
})

longButton.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longButton.classList.add('active')
})

function alterarContexto(contexto){
    buttons.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch(contexto) {
        case 'foco':
            tittle.innerHTML = `Otimize sua produtividade,<br>
                    <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;
        case 'descanso-curto':
            tittle.innerHTML = `Que tal dar uma respirada?<br>
                  <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;
        case 'descanso-longo':
            tittle.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa!</strong>`
        default:
            break;    
}}

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