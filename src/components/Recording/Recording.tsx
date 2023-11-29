import React from 'react'
import './Recording.css'

interface RecordingProps{
  isOpenPopup: ()=>void
}

export const Recording:React.FC<RecordingProps> = ({isOpenPopup}) => {
  return (
    <section className='recording'>
       <h2 className='recording__title'>Запишитесь на ремонт</h2>
       <p className='recording__subtitle'>Выберите нужную технику и запишитесь на любое время</p>
       <button className='recording__button'> <a href="https://vk.com/itresursostr" className='recording__link'>Записаться на ремонт</a></button>
    </section>
  )
}
