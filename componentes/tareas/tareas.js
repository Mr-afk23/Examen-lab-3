import { tarea } from "../tarea/tarea.js";

function tareas() {
    let contenedor = document.createElement("div");
    contenedor.id = "tareas";
    contenedor.className = "tareas";




    contenedor.appendChild(tarea());
    

    return contenedor;
}

export { tareas };