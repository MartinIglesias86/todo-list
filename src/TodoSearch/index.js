import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="Buscar tarea..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}
export {TodoSearch};