import React from "react";
import { ReactComponent as Error } from "./error.svg";
import './TodosError.css'

function TodosError() {
    return (
        <div className="container-error">
            <div className="title">Ha ocurrido un error, estamos trabajando para solucionarlo.</div>
            <Error 
                className="image"
                width={1200}
                height={160}
            />
            <button className="button" onClick={() => window.location.reload() }>Recargar pagina</button>
        </div>

        
    );
}

export { TodosError };