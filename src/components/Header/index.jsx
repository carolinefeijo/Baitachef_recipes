import React from 'react'
import './style.css'
import logo from '../../assets/img/logo.png';

export default function Header() {
    return (
        <div className='container'>

            <div className='logo-container'>
                <img className='logo' src={logo} alt='falha logo'></img>
                <h2 className='title-logo-red' >  Baita</h2>
                <h2 className='title-logo-green'>chef</h2>

            </div>

            <div className='container-align '>

                <a className='title-section' >Saúdavel</a>
                <a className='title-section' >Salgados</a>
                <a className='title-section' >Doces</a>
                <a className='title-section' >Rápidos</a>


            </div>



        </div>
    )
}
