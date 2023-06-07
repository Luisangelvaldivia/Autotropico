import {loginvalidation} from "./global.js"

const btnvalidar = document.getElementById('loginbtn');

async function LoginInit(){

    const user = document.getElementById('emailuser').value
    const pws = document.getElementById('pwsuser').value

    const sesion = loginvalidation(user,pws)
    const confirmation = await sesion

    .then((confirmation) => {
        // Signed in 
        alert("The user : "+user+" successfull")
        window.location.href="index.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("The user : "+user+" no validation " + errorMessage)
      });
    
}

window.addEventListener('DOMContentLoaded',async()=>
{
    btnvalidar.addEventListener('click',LoginInit)
})