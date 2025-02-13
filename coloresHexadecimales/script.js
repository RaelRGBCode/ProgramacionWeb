const contenedor=document.querySelector(".cont");
const color=document.querySelector(".cont__color");
const boton=document.querySelector(".cont__boton");

const colorPos="013456789ABCDEF";
let numAleatorio;

function crearNumHexadecimal(){
    let colorHexadecimal="#";
    for(let i=0; i<6; i++){
        numAleatorio=Math.floor(Math.random()*15);
        colorHexadecimal+=colorPos[numAleatorio];
    }
    return colorHexadecimal;

}

function agregarColor(){
color.textContent=`${crearNumHexadecimal()}`;
document.body.style.backgroundColor=`${crearNumHexadecimal()}`;
}


boton.addEventListener("click",agregarColor);