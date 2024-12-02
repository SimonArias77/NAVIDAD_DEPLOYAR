// Obtener los elementos
const button = document.getElementById('xmas-button');
const specialMessage = document.getElementById('special-message');

// Función para mostrar un mensaje navideño especial
function showSpecialMessage() {
    specialMessage.textContent = "¡Que esta Navidad traiga momentos inolvidables de alegría, paz y amor para tu familia!";
}

// Agregar un evento de clic al botón
button.addEventListener('click', showSpecialMessage);
