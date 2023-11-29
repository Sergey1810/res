import React from 'react'
import { Header } from '../../Header/Header'
import { Main } from '../../Main/Main'
import { Footer } from '../../Footer/Footer'

interface HomeProps{
    isOpenPopup: () => void
}

export const Home:React.FC<HomeProps> = ({isOpenPopup}) => {
    return (
        <>
            <Header />
            <Main isOpenPopup={isOpenPopup} />
            <Footer isOpenPopup={isOpenPopup} />
        </>
    )
}
