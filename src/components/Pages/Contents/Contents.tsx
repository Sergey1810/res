import React, { useState } from 'react'
import { Header } from '../../Header/Header'
import { Content } from '../../Content/Content'
import { Footer } from '../../Footer/Footer'
import { MainHeader } from '../../Main/MainHeader/MainHeader'
import { MainInfo } from '../../Main/MainInfo/MainInfo'
import { Prices } from '../../Price/Price'
import { Steps } from '../../Steps/Steps'

interface ContentsProps {
  isOpenPopup: () => void,
  title: string,
  text: string
}

export const Contents:React.FC<ContentsProps> = (props) => {

const [prices, setPrices] = useState([
  {id: '1',title: 'Диагностика',count:'0'},
  {id: '2',title: 'Ремонт компьютеров и ноутбуков',count:'0'},
  {id: '3',title: 'Обслуживание (чистка от пыли, смазывание кулеров, замена термопасты)',count:'0'},
  {id: '4',title: 'Установка и переустановка операционных систем',count:'0'},
  {id: '5',title: 'Установка и настройка программного обеспечения',count:'0'},
  {id: '6',title: 'Установка антивирусных программ и удаление вирусов',count:'0'},
  {id: '7',title: 'Настройка подключения локальной сети и сети интернет',count:'0'},
  {id: '8',title: 'Замена матриц',count:'0'},
  {id: '9',title: 'Замена разъемов',count:'0'},
  {id: '10',title: 'Установка и переустановка операционных систем',count:'0'},
  {id: '11',title: 'Установка и переустановка операционных систем',count:'0'},
])

  return (
    <div>
        <Header/>
        <MainHeader/>
        <Content isOpenPopup={props.isOpenPopup} title={props.title} text={props.text}/>
        <Prices prices={prices}/>
        <Steps/>
        <Footer isOpenPopup={props.isOpenPopup}/>
    </div>
  )
}
