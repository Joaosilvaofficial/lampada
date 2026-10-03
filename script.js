// Seleciona os elementos do HTML pelos IDs
const lampada = document.getElementById('lampada');
const interruptor = document.getElementById('interruptor');

// Variáveis para caminhos das imagens
const LAMPADA_APAGADA = 'assets/lampada-apagada.png';
const LAMPADA_ACESA = 'assets/lampada-acesa.png';
const LAMPADA_QUEBRADA = 'assets/lampada-quebrada.png';
const INTERRUPTOR_OFF = 'assets/switch-off.png';
const INTERRUPTOR_ON = 'assets/switch-on.png';

// Instancia os arquivos de áudio (certifique-se de que estão na pasta correta)
const somClick = new Audio('assets/click.mp3');
const somQuebra = new Audio('assets/lampada-quebrando.mp3');

// Variável de controle para verificar se a lâmpada está quebrada
let estaQuebrada = false;

// Função para ligar/desligar
function alternarEstado() {
    if (estaQuebrada) return; // Se estiver quebrada, não faz nada

    // Toca o som do interruptor
    somClick.currentTime = 0; // Reinicia o áudio caso clique muito rápido
    somClick.play();

    // Verifica o estado atual e alterna
    if (lampada.src.includes('lampada-apagada.png')) {
        lampada.src = LAMPADA_ACESA;
        interruptor.src = INTERRUPTOR_ON;
    } else {
        lampada.src = LAMPADA_APAGADA;
        interruptor.src = INTERRUPTOR_OFF;
    }
}

// Função para quebrar a lâmpada ao "tocar" nela
function quebrarLampada() {
    if (estaQuebrada) return;

    somQuebra.play();
    lampada.src = LAMPADA_QUEBRADA;
    estaQuebrada = true;

    // Remove o cursor de martelo e volta para o cursor padrão após quebrar
    lampada.style.cursor = 'default';
}


// Adiciona os eventos de clique aos elementos
interruptor.addEventListener('click', alternarEstado);
lampada.addEventListener('click', quebrarLampada);