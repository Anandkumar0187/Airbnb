import React, { useEffect, useState } from 'react'
import Card from './card';
import './lastComponent.css'

const LastComponent = () => {
    const [box,setBox] = useState();
    useEffect(()=>{
        setBox(document.querySelector('.l_product_container'))
        
    },[])
   
    const data = [
        {
            img: "usa.jpg",
            desc : "Plan The Perfect New York Vacation",
            rating: 4.99,
            people: 153,
            name : "United States",
            money : "1,533"
            
        },
        {
            img: "spain.jpg",
            desc : "Design Your Trip To Barcelona With Gemma",
            rating: 5.0,
            people: 19,
            name : "Spain",
            money : "3,150"
        },
        {
            img: "southKorea.jpg",
            desc : "Craft a Custom Trip to Korea with Jay",
            rating: 4.97,
            people: 60,
            name : "South Korea",
            money : "3,659"
        },
        {
            img: "mexico.jpg",
            desc : "Live Tulum Like a Local Person",
            rating: 4.63,
            people: 8,
            name : "Mexico",
            money : "624"
        },
        {
            img: "usa2.jpg",
            desc : "Plan a Trip to amazing Austin",
            rating: 4.75,
            people: 12,
            name : "United States",
            money : "2,017"
        },
        {
            img: "italy.jpg",
            desc : "Create Your Rome itinerary with Debora",
            rating: 4.91,
            people: 43,
            name : "Italy",
            money : "995"

        },
        {
            img: "italy1.jpg",
            desc : "Plan a Venice venture with Giulia",
            rating: 5.0,
            people: 16,
            name : "Italy",
            money : "2,487"
        },
        {
            img: "newYork.jpg",
            desc : "Plain a Trip to Nashville With a Local Insider",
            rating: 4.98,
            people: 41,
            name : "United States",
            money : "968"
        },
        {
            img: "usa3.jpg",
            desc : "Plan the perfect trip to Sunny Miami",
            rating: 5.0,
            people: 4,
            name : "United States",
            money : "1,694"
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
    <div className='l_carousel'>
        <div className='l_btns'>
            <div>
                <h1>Plan a trip with help from local Hosts around the world</h1>
            </div>
            <div className='l_slider-btn'>
                <u>show({data.length})</u>
                <button className='l_pre_btn' onClick={()=>prev()}>&lt;</button>
                <button className='l_nxt_btn' onClick={()=>next()}>&gt;</button>
            </div>
        </div>
      <div className='l_product_container'>
            {data.map((value)=>(
            <div><Card card={value.img} desc = {value.desc} rating = {value.rating} people={value.people} name={value.name} money={value.money}/></div>
            ))}
      </div>
    </div>
  )
}

export default LastComponent
