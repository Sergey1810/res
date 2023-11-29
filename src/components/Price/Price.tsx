import React from 'react'
import './Price.css'

interface PriceProps {
    id?:string,
    title: string,
    count: string
}

interface PricesProps{
  prices:PriceProps[]
}

const Price:React.FC<PriceProps> = ({id, title, count}) =>{
    return(
        <div className='price__item'>
            <h3 className='price__title'>{title}</h3>
            <p className='price__count'>от {count} ₽</p>
        </div>
    )
}

export const Prices:React.FC<PricesProps> = ({prices}) => {
  return (
    <div className='price'>
        <div className='price__container'>
          {prices.map(price => <Price key={price.id} title={price.title} count={price.count}/>)}
        </div>
    </div>
  )
}
