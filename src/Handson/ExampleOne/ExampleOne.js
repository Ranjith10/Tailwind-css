import React from 'react'

import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'

const ExampleOne = () => {
    return (
        <div className = 'flex flex-col justify-between h-[100vh]'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default ExampleOne
