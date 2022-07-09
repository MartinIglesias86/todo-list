import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(props){
    const {setOpenModal, openModal} = props;    
    const onClickButton = () => {
        setOpenModal(!openModal);
    }

    return(
        <div>
            <button 
            className="CreateTodoButton"
            onClick={ onClickButton }>
        
            +
        
            </button>
            <p className="container-p">Crear nueva tarea</p>
        </div>
    );
}

export { CreateTodoButton };