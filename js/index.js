import conversion from "./modules/conversion.js";
import pasteles from "./modules/pasteles.js";

var caja = document.getElementById("caja");

window.calcular = conversion.calcular.bind(conversion);
window.cargar = pasteles.cargar.bind(pasteles);

document.getElementById("conversion").addEventListener("click",()=>{
    caja.innerHTML = conversion.data;
})

document.getElementById("pasteles").addEventListener("click",()=>{
    caja.innerHTML = pasteles.data;
    pasteles.cargar();
})