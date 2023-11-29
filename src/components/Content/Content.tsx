import React from 'react'
import './Content.css'
import { Recording } from '../Recording/Recording'

interface ContentProps {
    isOpenPopup: () => void,
    title: string,
    text: string
}

export const Content: React.FC<ContentProps> = ({ isOpenPopup, title, text }) => {
    return (
        <div className='content'>
            <div className="content__container">
                <div className='content__info'>
                    <h2 className='content__title'>{title}</h2>
                    <p className='content__text'>{text}</p>
                </div>
                <Recording isOpenPopup={isOpenPopup} />
            </div>
        </div>
    )
}
