import React from 'react'
import { MainHeader } from './MainHeader/MainHeader'
import { MainGrid } from './MainGrid/MainGrid'
import './Main.css'
import { MainInfo } from './MainInfo/MainInfo'
import { MainContact } from './MainContact/MainContact'

interface MainProps {
  isOpenPopup:() => void
}

export const Main:React.FC<MainProps> = ({isOpenPopup}) => {
  return (
    <main>
        <MainHeader/>
        <MainGrid isOpenPopup={isOpenPopup}/>
        <MainInfo/>
        <MainContact/>
    </main>
  )
}
