//Criação de uma data
const dataDoEvento = new Date("Jul 06, 2024 00:00:00");
const timeStempDoEvento = dataDoEvento.getTime();

const contadorDeHoras = setInterval(function() {
    const agora = new Date();
    const timeStempDeAgora = agora.getTime();

    //Diferença entre os dois tempos
    const TempoRestante = timeStempDoEvento - timeStempDeAgora;

    const diasMs = 1000  * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;
    const segundosMs = 1000;

    const diasParaOEvento =  Math.floor(TempoRestante / diasMs);
    const horasParaOEvento = Math.floor((TempoRestante % diasMs) / horasMs);
    const minutosParaOEvento = Math.floor((TempoRestante % horasMs) / minutosMs);
    const segundosParaOEvento = Math.floor((TempoRestante % minutosMs) / segundosMs);

    document.getElementById("contador").innerHTML = `${diasParaOEvento}D ${horasParaOEvento}H ${minutosParaOEvento}M ${segundosParaOEvento}S`;
    if (TempoRestante < 0 ) {
        clearInterval(contadorDeHoras);
        document.getElementById("contador").innerHTML = `0d 0h 0m 0s`
    }
}, 1000);