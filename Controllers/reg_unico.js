import { adduser, readuser } from "./global.js";

const formulario = document.getElementById('regusers') 
const btn = document.getElementById('btnsearch')
const visualizar = document.getElementById('container1')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const cc = formulario['documento']
    const primer = formulario['nombre']
    const segundo = formulario['targeta']
    const tel = formulario['celular']
    const img = formulario['response']

    adduser(
        cc.value,
        primer.value,
        segundo.value,
        tel.value,
        img.value)

        alert('Usuario '+cc.value+' registrado')
})

async function getdetails(){
    const ced= document.getElementById('edtid').value

    const docRef = readuser(ced)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let html=""
        html=`
            <div class="card" style="width: 18rem;">
                <img src="${docSnap.data().image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${docSnap.data().nombre}</P>
                    <p class="card-text">${docSnap.data().targeta}</p>
                    <p class="card-text">${docSnap.data().identificaion}</p>
                    <p class="card-text">${docSnap.data().celular}</p>
                </div>
            </div>
        `
        visualizar.innerHTML=html
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

window.addEventListener('DOMContentLoaded',async()=>{
    btn.addEventListener('click',getdetails)
})


// Ocultar el botón
document.getElementById("inicioButton").style.display = "none";

// Mostrar el botón
document.getElementById("inicioButton").style.display = "block";
