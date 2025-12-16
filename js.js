// Seleccionar elementos
const userInput = document.querySelector(".input_user");
const passwordInput = document.querySelector(".input_password");
const signInButton = document.querySelector(".button_sign_in");

// Evento click en el botón SIGN IN
signInButton.addEventListener("click", function () {
  const user = userInput.value.trim();
  const password = passwordInput.value.trim();

  // Validación
  if (user === "" || password === "") {
    alert("Completa todos los campos");
    return;
  }

  // Simulación de login correcto
  alert(`Bienvenido ${user} (login demo)`);
});
