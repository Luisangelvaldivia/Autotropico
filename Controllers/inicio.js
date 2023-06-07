import { Usercreate } from "./global.js";

const btnvalidar = document.getElementById('loginbtn');

async function registeruser() {
  const user = document.getElementById('emailuser').value;
  const pws = document.getElementById('pwsuser').value;

  const register = Usercreate(user, pws);
  const confirmation = await register
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert('Registro exitoso. ¡Bienvenido!');

      // Redirigir al usuario a otra página
      window.location.href = 'reg_unico.html';

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      alert('Error en el registro. Inténtalo nuevamente.');
      // ..
    });
}

window.addEventListener('DOMContentLoaded', () => {
  btnvalidar.addEventListener('click', registeruser);
});
