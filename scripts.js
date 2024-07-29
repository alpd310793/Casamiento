// Función para reproducir o pausar el audio
function playAudio() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const countdownDate = new Date("2025-02-22T17:30:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerHTML = "¡Llegó el día!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
}

// Actualiza la cuenta regresiva cada 1 segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Llamada inicial para configurar la cuenta regresiva inmediatamente
updateCountdown();


// Función para abrir el modal
function openModal() {
    document.getElementById('modal-cbu').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal-cbu').style.display = 'none';
}

