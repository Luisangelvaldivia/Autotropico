const btncerrar = document.getElementById('logoutbtn');


async function singOut(){

  alert("sesion cerrada")
  window.location.href="vista.html"

}
window.addEventListener('DOMContentLoaded',async()=>
{
    btncerrar.addEventListener('click',singOut)
    
})
  