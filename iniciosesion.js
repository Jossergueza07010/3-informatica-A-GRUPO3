const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');

let passwordVisible = false;

togglePasswordButton.addEventListener('click', () => {
    if (passwordVisible) {
        passwordInput.type = 'password';
        togglePasswordButton.className = 'fas fa-eye';
        passwordVisible = false;
    } else {
        passwordInput.type = 'text';
        togglePasswordButton.className = 'fas fa-eye-slash';
        passwordVisible = true;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Comprueba si las credenciales son válidas (reemplázalas con tu lógica de validación)
    if (email === 'jose@gmail.com' && password === 'pepe123') {
        // Credenciales correctas, puedes redirigir a la página siguiente aquí
        window.location.href = '/html/index.html'; // Reemplázalo con la URL de tu página segura
    } else {
        // Credenciales incorrectas, muestra un mensaje de error
        errorMessage.textContent = 'Correo electrónico o contraseña incorrectos.';
    }
});