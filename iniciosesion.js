const form = document.getElementById('inicio-sesion');
const mensaje = document.getElementById('incorrecto');
const contra = document.getElementById('password');
const alternarcontra = document.getElementById('visibilidad');

let passwordVisible = false;


alternarcontra.addEventListener('click', () => {
    if (passwordVisible) {
        contra.type = 'password';
        alternarcontra.className = 'fas fa-eye';
        passwordVisible = false;
    } else {
        contra.type = 'text';
        alternarcontra.className = 'fas fa-eye-slash';
        passwordVisible = true;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'jose@gmail.com' && password === 'pepe123') {
        window.location.href = '/html/index.html'; 
    } else {
        mensaje.textContent = 'Correo electrónico o contraseña incorrectos.';
    }
});