import { formulario } from "../componentes/formulario/formulario.js";
import { tarea } from "./componentes/tarea/tarea.js";


function seccion() {
    let seccion = document.createElement('section');
    seccion.className = 'tareas';

    seccion.appendChild(formulario());
    seccion.appendChild(tarea());

    return seccion;
}

document.body.appendChild(seccion());
