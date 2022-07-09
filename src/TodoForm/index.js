import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
import Swal from "sweetalert2";


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        (newTodoValue === '') ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La tarea no puede estar vacía!',
        }) : addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea
                autoFocus
                value={newTodoValue}
                onChange={onChange}
                placeholder="Agrega una tarea"
            />
            <div className="TodoForm-buttonContainer" >
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm };