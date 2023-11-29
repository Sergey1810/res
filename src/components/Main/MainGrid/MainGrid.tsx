import React, { useState } from 'react'
import { MainGridElement } from './MainGridElement/MainGridElement'
import './MainGrid.css'
import { Recording } from '../../Recording/Recording'
import one from '../../../images/page-3.png' 
import two from '../../../images/page-4.png' 
import three from '../../../images/page-5.png' 
import four from '../../../images/page-6.png' 
import five from '../../../images/page-7.png' 
import sixe from '../../../images/page-8.png' 


interface MainGrodProps{
    isOpenPopup:()=>void
}

export const MainGrid:React.FC<MainGrodProps> = ({isOpenPopup}) => {

    const [element, setElement] = useState([
        {
            image: one, 
            title: '1C', 
            subtitle: 'ПРОФЕССИОНАЛЬНЫЕ СИСТЕМНЫЕ АДМИНИСТРАТОРЫ',
            link: 'pc'
        },
        {
            image: two, 
            title: 'Ремонт офисной техники', 
            subtitle: 'ПРОФЕССИОНАЛЬНЫЕ СИСТЕМНЫЕ АДМИНИСТРАТОРЫ',
            link:'org'
        },
        {
            image: three, 
            title: 'Обслуживание организаций', 
            subtitle: 'ПРОФЕССИОНАЛЬНЫЕ СИСТЕМНЫЕ АДМИНИСТРАТОРЫ',
            link: 'mobile'
        },
        {
            image: four, 
            title: 'Видеонаблюдение', 
            subtitle: 'ПРОФЕССИОНАЛЬНЫЕ СИСТЕМНЫЕ АДМИНИСТРАТОРЫ',
            link: 'video'
        }, 
        {
            image: five, 
            title: 'video', 
            subtitle: 'ПРОФЕССИОНАЛЬНЫЕ СИСТЕМНЫЕ АДМИНИСТРАТОРЫ',
            link: '1c'
        },
        {
            image: sixe, 
            title: 'Кассы: продажа, ремонт, обслуживание', 
            subtitle: 'ПРОФЕССИОНАЛЬНЫЕ СИСТЕМНЫЕ АДМИНИСТРАТОРЫ',
            link: 'kassa'
        }
    ])

    return (
        <section className='mainGrid'>
            <div className='mainGrid__container'>
                <div className='mainGrid__content'>
                    {/* <MainGridElement image={one} title={'1C'} subtitle=''/> */}
                    {element.map(item => <MainGridElement image={item.image} title={item.title} subtitle={item.subtitle} link={item.link}/>)}
                </div>
                <Recording isOpenPopup={isOpenPopup}/>
            </div>
        </section>
    )
}
