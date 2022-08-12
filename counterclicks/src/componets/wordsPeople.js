import React from 'react';
import '../styleSheets/wordsPeople.css'

export function Testimonio(props){
  return(
    <div className = 'contenedor-testimonio'>
      <img 
        className = 'imagen-testimonio' 
        src = {require(`../images/testimonio-${props.image}.jpg`)}
        alt = {props.imageName}
      />
      <div className='all-texts'>
        <p className='first-title'> 
          <strong> {props.name} </strong> en {props.country} 
        </p>
        <p className='second-title'> 
          {props.occupation} en <strong> {props.company} </strong> 
        </p>
        <p className='content-text'> "{props.text}" </p>
      </div>
    </div>
    
  );

}

export default Testimonio;