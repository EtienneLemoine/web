import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul className='ul'>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Proyects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
