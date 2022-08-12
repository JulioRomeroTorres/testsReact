import React from "react";
import '../styleSheets/Counter.css'


export function Counter({ numClics }){
    return(
       <div className='contador'>
           {numClics}
       </div> 
    );
}