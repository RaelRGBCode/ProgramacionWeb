let ranRojo=document.getElementById("ranRojo");
let textoRojo=document.getElementById("textoRojo");

let ranVerde=document.getElementById("ranVerde");
let textoVerde=document.getElementById("textoVerde");

let ranAzul=document.getElementById("ranAzul");
let textoAzul=document.getElementById("textoAzul");


function pintar(rojo,verde,azul){
    document.body.style.backgroundColor=`rgb(${rojo},${verde},${azul})`;
}


let rojo=ranRojo.value;
let verde=ranVerde.value;
let azul=ranAzul.value;

ranRojo.addEventListener("input",(e)=>{
rojo=e.target.value;
textoRojo.textContent=`${ranRojo.value}`;
pintar(rojo,verde,azul);
});
ranVerde.addEventListener("input",(e)=>{
verde=e.target.value;
textoVerde.textContent=`${ranVerde.value}`;
pintar(rojo,verde,azul);
});
ranAzul.addEventListener("input",(e)=>{
azul=e.target.value;
textoAzul.textContent=`${ranAzul.value}`;
pintar(rojo,verde,azul);
});



