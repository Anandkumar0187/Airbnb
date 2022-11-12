import React from 'react'
import './header.css';

const Header = ()=>{
    return (
        <div className='h-header'>
            <div className='h-logo_head'>
                <img src='airbnb_logo.png' className='h-logo' alt='no data found'/>
            </div>
            <div className='h-right_part'>
                <button className='h-host'>Become a host</button>
                <button className='h-int_btn'><img src='internet.png' className='h-internet'alt='no data found'/></button>
                <button id='h-profile'>
                    <img src='triple_bar.png' className='h-triple_bar' alt='no data found' />
                    <img src='login.png'className='h-login' alt='no data found'/>
                    </button>
            </div>
        </div>
    )
}
export default Header;