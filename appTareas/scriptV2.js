const formulario=document.querySelector(".formulario");
const inputTarea=document.querySelector(".entrada");
const listaTarea=document.querySelector(".listaTarea");
const boton=document.querySelector(".boton");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    agregarTareaAreglo(inputTarea.value);
    inputTarea.value="";
})

inputTarea.addEventListener("keydown",(e)=>{
 if(e.key=="Enter"){
    agregarTareaAreglo(inputTarea.value);
    e.preventDefault();//Evita que el formulario tambien se envie
    inputTarea.value="";
 }
})

let tareas=JSON.parse(localStorage.getItem("tareas"))||[];

function agregarTareaAreglo(nuevaTarea){
if(nuevaTarea){
    tareas.push(nuevaTarea);
    localStorage.setItem("tareas",JSON.stringify(tareas));
    mostrarTarea(tareas);
}
}

function mostrarTarea(tareas){
    listaTarea.innerHTML=""
   
    tareas.forEach((tarea, indice) => {
        listaTarea.innerHTML += `<li>${tarea}<button class="botonEliminar" onclick="borrarTarea(${indice})">❌</button></li>`;
    });
}

function borrarTarea(indice){
tareas.splice(indice,1);
localStorage.setItem("tareas",JSON.stringify(tareas));
mostrarTarea(tareas);
}

mostrarTarea(tareas);