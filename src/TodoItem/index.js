import React from 'react';
import './TodoItem.css';
import { VscCheck } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <VscCheck />
            </span>
            <p 
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <span 
                className=" Icon-delete"
                onClick={props.onDelete}
            
            >
                <VscChromeClose />
            </span>
        </li>
    );
}

export { TodoItem };