const entrada=document.querySelector(".entrada");
const boton=document.querySelector(".boton");
const tareas=document.querySelector(".listaTareas");
const formulario=document.querySelector(".formulario");


formulario.addEventListener("submit",(e)=>{
let guardarTarea;
e.preventDefault();
const valor=entrada.value;
recibirTarea(valor);
localStorage.set()
e.target.reset();//Lo que hace es dejar en blanco los input
});

function recibirTarea(value){
let tareaNueva=document.createElement("li");
tareaNueva.textContent=`${value}`;
tareas.appendChild(tareaNueva);
//.append permite agregar mas de un nodo 
//tareas.append(tareaNueva,"hola mundo")
//tareas.prepend(tareaNueva); //agrega al nodo hijo al principio
elminarTarea(tareaNueva);
mensaje();
}

mensaje();
//Agregar mensaje si hay o no hay tareas por hacer
function mensaje(){
const h3=document.createElement('h3');
h3.classList.add("mensaje-previo");
h3.textContent=tareas.firstElementChild?"Tareas por hacer":"No hay tareas";

const mensajePrevio=document.querySelector(".mensaje-previo");
if(mensajePrevio){//SI ESTO NO RETORNA NULL
    mensajePrevio.replaceWith(h3);
    return;
}
//before agrege el mensaje antes del ul que contiene las tareas
tareas.before(h3);
}


//Borrar tareas
function elminarTarea(elemento){
    elemento.addEventListener("dblclick",(e)=>{
    elemento.remove();
    mensaje();
    })
}