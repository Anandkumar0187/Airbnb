import React from 'react'
import './footer.css'
const Footer = ()=>{
    return (
        <div className='container'>
            <div className='main-footer'>
                <div>
                    <h3>Support</h3>
                    <p>Help Centre</p>
                    <p>AirCover</p>
                    <p>Safety information</p>
                    <p>Supporting people with disabilities</p>
                    <p>Cancellation options</p>
                    <p>Our COVID-19 Response</p>
                    <p>Report a neighbourhood concern</p>
                </div>
                <div>
                    <h3>Community</h3>
                    <p>Airbnb.org: disaster relief housing</p>
                    <p>Support Afghan refugees</p>
                    <p>Combating discrimination</p>
                </div>
                <div>
                    <h3>Hosting</h3>
                    <p>Try hosting</p>
                    <p>AirCover for Hosts</p>
                    <p>Explore hosting resources</p>
                    <p>Visit our community forum</p>
                    <p>How to host responsibly</p>
                </div>
                <div>
                    <h3>Airbnb</h3>
                    <p>Newsroom</p>
                    <p>Learn about new features</p>
                    <p>Letter from our founders</p>
                    <p>Careers</p>
                    <p>Investors</p>
                </div>
            </div>
            <div className='social'>
                <p>&#169; 2022 Airbnb, Inc.&nbsp;·&nbsp;Privacy&nbsp;·&nbsp;Terms&nbsp;·&nbsp;Sitemap&nbsp;·&nbsp;Company details</p>
                <div className='socials'>
                    <p><img src='internet.png' alt='no data found'/></p>
                    <p>English(IN)&nbsp;&#8377; &nbsp; INR</p>
                    <img src='facebook.png' alt='no data found'/>
                    <img src='twiter.png' alt='no data found'/>
                    <img src='insta.png' alt='no data found'/>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;