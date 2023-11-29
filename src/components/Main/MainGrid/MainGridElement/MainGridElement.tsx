import React from 'react'
import './MainGridElement.css'
import { Link } from 'react-router-dom'

interface MainGridElementProps {
    image: string,
    title: string,
    subtitle: string,
    link: string
}

export const MainGridElement: React.FC<MainGridElementProps> = ({ image, title, subtitle, link }) => {
    return (
        <Link to={link}>
            <div className='mainGridElement'>
                <img src={image} alt={title} className='mainGridElement__image' />
                {/* <h2 className='mainGridElement__title'>{title}</h2> */}
            </div>
        </Link>
    )
}
