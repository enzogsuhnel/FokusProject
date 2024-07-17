const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const tittle = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const startPauseButton = document.querySelector('#start-pause');
const iconButtonStPs = document.querySelector('.app__card-primary-butto-icon');
const screenTimer = document.querySelector('#timer');

const musicFocusInput = document.querySelector('#alternar-musica');
const music = new Audio('./sons/luna-rise-part-one.mp3');
const startAudio = new Audio('./sons/play.wav');
const pauseAudio = new Audio('./sons/pause.mp3');
const finalTimerAudio = new Audio('./sons/beep.mp3');

let runningTimeInSeconds = 1500;
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
    runningTimeInSeconds = 1500;
    alterarContexto('foco');
    focusButton.classList.add('active')
})

shortButton.addEventListener('click', () => {
    runningTimeInSeconds = 300;
    alterarContexto('descanso-curto');
    shortButton.classList.add('active')
})

longButton.addEventListener('click', () => {
    runningTimeInSeconds = 900;
    alterarContexto('descanso-longo');
    longButton.classList.add('active')
})

function alterarContexto(contexto){
    showTime()
    buttons.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `C:/Users/enzo.suhnel/Documents/Estudos/Alura/JavaScript/FokusProject/imagens/${contexto}.png`)
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
    if(runningTimeInSeconds <= 0){
        zerar();
        finalTimerAudio.play()
        alert('Tempo Finalizado!');
        runningTimeInSeconds = 5;
        return;
    }
    runningTimeInSeconds -= 1
    showTime()
}

startPauseButton.addEventListener('click', startPause);

function startPause() {
    if(intervaloId){
        pauseAudio.play()
        zero();
        return;
    }
    startAudio.play()
    intervaloId = setInterval(contagemRegressiva, 1000);
    startPauseButton.textContent = 'Pausar'
    //iconButtonStPs.setAttribute = ('src', `C:/Users/enzo.suhnel/Documents/Estudos/Alura/JavaScript/FokusProject/imagens/pause.png`);
}

function zero() {
    clearInterval(intervaloId);
    startPauseButton.textContent = 'Começar'
    //iconButtonStPs.setAttribute = ('src', `C:/Users/enzo.suhnel/Documents/Estudos/Alura/JavaScript/FokusProject/imagens/play_arrow.png`);
    intervaloId = null
}

function showTime() {
    const time = new Date(runningTimeInSeconds * 1000);
    const formatedTime = time.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    screenTimer.innerHTML = `${formatedTime}`
}

showTime()
//Finalizado -- Faltou arrumar arrow do botão pause (tirar pra não ficar incompleto.)