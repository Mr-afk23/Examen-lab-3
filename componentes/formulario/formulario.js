import { tarea } from "../tarea/tarea.js";

function formulario() {
    let form = document.createElement("form");
    form.className = "formulario";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escribe tu tarea";
    input.className = "input-tarea";

    let btnAgregar = document.createElement("button");
    btnAgregar.type = "submit";
    btnAgregar.textContent = "Agregar";
    btnAgregar.className = "btn-agregar";

    form.appendChild(input);
    form.appendChild(btnAgregar);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value.trim() !== "") {
            let nuevaTarea = tarea();
            nuevaTarea.querySelector('.texto-tarea').textContent = input.value;
            document.getElementById("tareas").appendChild(nuevaTarea);
            input.value = "";
        }
    });

    return form;
}

export { formulario };