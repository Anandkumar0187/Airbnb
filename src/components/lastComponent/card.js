import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className='l_mycard'>
        <b className='heart'>&#9825;</b>
        <img src={props.card} alt="no data found"/>
        <div className='info'>
          <img src="star.png" alt='no data found'/>
          <p>{props.rating}</p>
          <p className='fade'>({props.people})</p>
          <p className='fade'>&nbsp;.&nbsp;{props.name}</p>
        </div>
        <div className='desc'>
          <p>{props.desc}</p>
        </div>
        <div className='money_data'>
          <p className='money'>FROM &#8377;{props.money}</p>
          <p>/Person</p>
        </div>
        
    </div>
  )
  
}

export default Card;
