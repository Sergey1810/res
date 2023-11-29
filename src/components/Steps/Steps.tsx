import React from 'react'
import './Steps.css'

export const Steps = () => {
    return (
        <section className='steps'>
            <div className='steps__container'>
                <h3 className='steps__title'>Четыре простых этапа работы нашего сервисного центра</h3>
                <div className='steps__flex'>
                    <div className='steps__flex-item'>

                        <h4 className='steps__item-title'>Консультация</h4>
                        <p className='steps__item-subtitle'>Консультация о стоимости ремонта, запись в сервис или вызов курьера на дом</p>
                    </div>
                    <div className='steps__flex-item'>
                        <h4 className='steps__item-title'>Диагностика</h4>
                        <p className='steps__item-subtitle'>Диагностика поломки, согласование конечной цены, а также сроков ремонта</p>
                    </div>
                    <div className='steps__flex-item'>
                        <h4 className='steps__item-title'>Ремонт устройства</h4>
                        <p className='steps__item-subtitle'>Ремонт и проверка устройства, оформление заказ-наряда и гарантийного талона</p>
                    </div>
                    <div className='steps__flex-item'>
                        <h4 className='steps__item-title'>Готово!</h4>
                        <p className='steps__item-subtitle'>Выдаем гарантийный талон с печатью нашей организации на услуги и детали</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
