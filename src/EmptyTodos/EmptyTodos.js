import React from "react";
import { ReactComponent as EmptySvg } from "./empty.svg";
import './EmptyTodos.css'

function EmptyTodos() {
    return (
        <div className="container-empty-todos">
            <h2>No tienes tareas pendientes!</h2>
            <p>Puedes asignar tu proxima tarea haciendo click en el siguiente botón "Crear nueva tarea".</p>
            <EmptySvg className="img"/>
        </div>
    );
}

export { EmptyTodos } 