import React from 'react';
import './tags.css';

function Tags(props) {
  return (
    <div className='prop-btn'>
        <button>{props.prod}</button>
    </div>
  )
}

export default Tags;
