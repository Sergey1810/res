import React from 'react'
import './PopupForm.css'

interface PopupFormProps {
  isOpen:boolean,
  isClosePopup: () => void
}

export const PopupForm:React.FC<PopupFormProps> = ({isOpen, isClosePopup}) => {
    return (
        <section className={`popup ${isOpen ? 'popup_open' : ''}`}>
            <div className="popup__container">
                <button className={`popup__btn-close `} onClick={isClosePopup} type="button"></button>
                <form className='popup__form'>
                    <h2 className='popup__title'>Записаться на ремонт</h2>
                    <p className='popup__subtitle'>Оставьте заявку и наш менеджер свяжется с вами в ближайшее время</p>
                    <div className='popup__field'>
                        <input type="text" className='popup__input' />
                    </div>
                    <div className='popup__field'>
                        <input type="text" className='popup__input' />
                    </div>
                    <button className="popup__btn-save" type="submit">Сохранить</button>
                </form>
            </div>
        </section>
    )
}
