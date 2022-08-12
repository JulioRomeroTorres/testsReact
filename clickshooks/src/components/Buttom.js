import React from "react";
import '../styleSheets/Buttom.css'

export function Buttonr(props){
    return (
        <button 
        className={ props.isButtonClic == 0 ? 'increase-clic': 'boton-reset' 
        } 
        onClick={props.manageClic}> 
        {props.text} Valor </button>
    );
}

