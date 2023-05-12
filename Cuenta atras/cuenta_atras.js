function guardarHora() {
    var hora = document.getElementById("hora").value;
    document.getElementById("resultado").innerHTML = hora;
    alert("La alarma sonará a las " + hora);
    calcularTiempoRestante(hora);
    return hora;
}

function calcularTiempoRestante(hora) { 
    var ahora = new Date();
    var tiempoRestante = hora - ahora;
    document.getElementById("calcularTiempoRestante").innerHTML = tiempoRestante;
}

function aumentarHora() {
    var hora = document.getElementById("sumaHora").value;
    var separado = hora.split(":");
    var sumHora = parseInt(separado[0],10);
    var sumMin = parseInt(separado[1],10);
    nouMinut = sumMin + minute - 1;
    if (nouMinut >= 60){
        sumHora += 1;
        nouMinut = nouMinut - 60;
        if (nouMinut < 10){
            nouMinut = "0" + nouMinut;
        }
    } else {
        if (nouMinut < 10){
            nouMinut = "0" + nouMinut;
        }
    }
    novaHora = hour + sumHora;
    if (novaHora >= 24){
        novaHora = novaHora - 24;
        if (novaHora < 10){
            novaHora = "0" + novaHora;
        }
    }
    alarma = novaHora + ":" + nouMinut;
    return alarma;
}

function updateClock(){
    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    time = hour + ":" + minute + ":" + second;

    actualTime.innerHTML = time;

    var horaAlarma = document.getElementById("hora").value + ":00";
    aumentarHora();
    alarma = alarma + ":01";
    if ((horaAlarma == time) || (time == alarma)) {
        var audio = document.getElementById("sonido-alarma");
        audio.play();
        alert("Terminé");
    }
    setTimeout(updateClock, 1000);
}

function updateAlarm(){
    aumentarHora();
    var sep = alarma.split(":");
    let hora = parseInt(sep[0]);
    let min = parseInt(sep[1]);
    min = min + 1;
    alarma = hora + ":" + min;
    resultado.innerHTML = alarma;
}

function cambiarTema() {
    var body = document.body;
    body.classList.toggle("dark");
}