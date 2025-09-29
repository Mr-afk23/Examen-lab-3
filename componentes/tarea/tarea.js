import { formulario } from "../formulario/formulario.js";

function tarea() {
    let tarea = document.createElement("div");
    tarea.className = 'tarea';

    let textoTarea = document.createElement("span");
    textoTarea.className = 'texto-tarea';
    textoTarea.textContent = 'Nueva tarea';

    let botonEliminar = document.createElement("button");
    botonEliminar.className = 'btn-eliminar';
    botonEliminar.textContent = 'Eliminar';

    botonEliminar.addEventListener("click", () => {
        tarea.remove();
    });

    tarea.appendChild(textoTarea);
    tarea.appendChild(botonEliminar);

    return tarea;
}

export { tarea };