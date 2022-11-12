import React from 'react';
import './Slides.css';

function Slides(props) {
  return (
    <div className='mycard'>
        <p>collections</p>
        <h3>{props.desc}</h3>
        <button>Show All</button>
        <img src={props.card} alt="no data found"/>

    </div>
  )
  
}

export default Slides;
