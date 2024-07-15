const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const tittle = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const startPauseButton = document.querySelector('#start-pause');

const musicFocusInput = document.querySelector('#alternar-musica');
const music = new Audio('./sons/luna-rise-part-one.mp3');

let runningTimeInSeconds = 5;
let intervaloId = null;

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

const contagemRegressiva = () => {
    //iniciar();
    runningTimeInSeconds -= 1
    console.log('Temporizador: ' + runningTimeInSeconds);
}

startPauseButton.addEventListener('click', contagemRegressiva);

function iniciar() {
    intervaloId = setInterval(contagemRegressiva, 1000); 
}

//ERROs: image not found // aula falando de breack no setinterval