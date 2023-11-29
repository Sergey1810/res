import React from 'react'
import './MainHeader.css'

export const MainHeader = () => {
  return (
    <section className='mainHeader'>
      <div className='mainHeader__grid'>
        <div className='mainHeader__banner'>
          <h2 className='mainHeader__banner-title'>IT - Resurs - Компьютерная мастерская в городе Острогожск</h2>
        </div>
      </div>
      {/* <div className='mainHeader__block-image'>
        <img src={logo} alt="" className='mainHeader__image' />
      </div>
      <div className='mainHeader__info'>
        <h1 className='mainHeader__title'>IT - Услуги для всех</h1>
        <p className='mainHeader__subtitle'>+7 (47375) 4-55-69</p>
      </div> */}
    </section>
  )
}

