import React from 'react';
import '../style-sheets/Deposition.css';




function Deposition(props){

  return (
    
      <div className = 'deposition-container' >
        <img 
          className = 'deposition-image' 
          src = {require(`../images/${props.image}.png`)} 
          alt = "foto" 
        />
        <div className = 'deposition-text-container'>
          <p className = 'deposition-name'><strong>{props.name}</strong> in {props.country}</p>
          <p className = 'deposition-load'>{props.load} Engineer at <strong>{props.company}</strong></p>
          <p className = 'deposition-text'>"{props.deposition}"</p>
        </div>
      </div>
    
  );
}



export default Deposition;