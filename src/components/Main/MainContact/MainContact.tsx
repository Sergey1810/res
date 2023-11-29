import React from 'react'
import './MainContact.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export const MainContact = () => {
    return (
        <div className='mainContact'>
            <div className='mainContact__info'>
                <h2 className='mainContact__title'>Сервисный центр в Острогожске</h2>
                <h3 className='mainContact__subtitle'>Номер для связи со специалистами</h3>
                <p className='mainContact__text'>+7-952-55-69-379</p>
                <h3 className='mainContact__subtitle'>Время работы Компьютерной мастерской</h3>
                <p className='mainContact__text'>пн-чт 08:00-18:00</p>
                <p className='mainContact__text'>пн 08:00-17:00</p>
                <p className='mainContact__text'>сб 08:00-14:00</p>
                <h3 className='mainContact__subtitle'>Адрес в Острогожске</h3>
                <p className='mainContact__text'>улица Нарского, 3</p>
            </div>
            <div className='mainContact__maps'>
                <YMaps >
                    <div>
                        <Map defaultState={{ center: [50.857325, 39.076957], zoom: 17 }} className='mainContact__map'>
                            <Placemark geometry={[50.857325, 39.076957]} />
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    )
}
