import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

export const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='header__container'>
               <Link to='/'><img className='header__logo' src={logo} alt="" /></Link> 
                <div className='header__navbar'>
                    <NavLink to='' className='header__link'>Услуги и цены</NavLink>
                    {/* <NavLink to='' className='header__link'>новости</NavLink> */}
                    <NavLink to='' className='header__link'>контакты</NavLink>
                    <NavLink to='' className='header__link'>Удаленная поддержка</NavLink>
                </div>
                <div>
                    <p className='header__info'>+7 (47375) 4-55-69</p>
                    <p className='header__info'>+7-952-55-69-379</p>
                </div>
                <div>
                <p className='header__info header__info_gr'>Пн-Чт : c 8:00 - 18:00</p>
                <p className='header__info header__info_gr'>Пятница : c 8:00 - 17:00</p>
                <p className='header__info header__info_gr'>Суббота : c 8:00 - 14:00</p>
                </div>

            </div>
        </header>
    )
}
