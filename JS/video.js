// Selecciona el botón de reproducción y el overlay
const playBtn = document.querySelector('.glightbox.play-btn');
const videoOverlay = document.createElement('div');
videoOverlay.id = 'videoOverlay';

// Crea el botón de cerrar
const closeBtn = document.createElement('button');
closeBtn.id = 'closeVideoBtn';
closeBtn.innerHTML = 'X';  // Puedes cambiar el texto a lo que prefieras

// Añadir el video al overlay
const videoElement = document.createElement('video');
videoElement.controls = true;
videoElement.src = '/VIDEO/Presentacion.mp4';  // Ruta del video
videoElement.type = 'video/mp4';

// Añadir el video y el botón de cierre al overlay
videoOverlay.appendChild(closeBtn);
videoOverlay.appendChild(videoElement);

// Añadir el overlay al body
document.body.appendChild(videoOverlay);

// Función para abrir el overlay
playBtn.addEventListener('click', function (e) {
    e.preventDefault();  // Evita la acción predeterminada (cambiar de página)
    videoOverlay.style.display = 'flex';  // Muestra el overlay
    videoElement.play();  // Reproduce el video
});

// Función para cerrar el overlay
closeBtn.addEventListener('click', function () {
    videoOverlay.style.display = 'none';  // Oculta el overlay
    videoElement.pause();  // Detiene el video
    videoElement.currentTime = 0;  // Reinicia el video al principio
});
