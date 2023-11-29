import React from 'react'
import logo from '../../images/logo.svg'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Recording } from '../Recording/Recording'

interface FooterProps {
    isOpenPopup:()=>void
}

export const Footer:React.FC<FooterProps> = ({isOpenPopup}) => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className="footer__columns">
                    <div className="footer__column">
                        <img src={logo} alt="" className='footer__logo'/>
                        <p className='footer__info'> обслуживание и ремонт техники в Острогожске</p>
                        <p className='footer__info-tel'>+7-952-55-69-379</p>
                    </div>
                </div>
                <div className="footer__columns">
                    <h2 className='footer__title'>Услуги</h2>
                    <ul className='footer__navigation'>
                        <li className='footer__navLink'><Link to='' className='footer__link'>1С</Link></li>
                        <li className='footer__navLink'><Link to='' className='footer__link'>Ремонт офисной техники</Link></li>
                        <li className='footer__navLink'><Link to='' className='footer__link'>Ремонт компьютерной техники</Link></li>
                        <li className='footer__navLink'><Link to='' className='footer__link'>Обслуживание организаций</Link></li>
                        <li className='footer__navLink'><Link to='' className='footer__link'>Обязательная маркировка товаров</Link></li>
                        <li className='footer__navLink'><Link to='' className='footer__link'>Системы видеонаблюдения</Link></li>
                    </ul>
                </div>
                <div className="footer__columns">
                    <Recording isOpenPopup={isOpenPopup}/>
                </div>
            </div>
            <p className='footer__copyright'>&copy; {new Date().getFullYear()} Sergey Lisovtsev</p>
        </footer>
    )
}
