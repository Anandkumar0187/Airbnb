import React, { useEffect, useState } from 'react'
import Slides from './Slides'
import './FirstComponent.css'

const FirstComponent = () => {
    const [box,setBox] = useState();
    useEffect(()=>{
        setBox(document.querySelector('.product_container'))
        
    },[])
   
    const data = [
        {
            img: "1st.webp",
            desc : "Most Popular Around The World"
        },
        {
            img: "2nd.webp",
            desc : "Great For Team Building"
        },
        {
            img: "3rd.webp",
            desc : "Fun For The Family"
        }
    ]
    let prev = ()=>{
        let width = box.clientWidth;
        console.log(width);
        box.scrollLeft = box.scrollLeft - width;
    }
    let next = ()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }
  return (
    <div className='carousel'>
        <div className='btns'>
            <div>
                <h1>New This Week</h1>
            </div>
            <div className='slider-btn'>
                <button className='pre_btn' onClick={()=>prev()}>&lt;</button>
                <button className='nxt_btn' onClick={()=>next()}>&gt;</button>
            </div>
        </div>
      <div className='product_container'>
            {data.map((value)=>(
            <div><Slides card={value.img} desc = {value.desc}/></div>
            ))}
      </div>
    </div>
  )
}

export default FirstComponent
