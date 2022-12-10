import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Routs from './Routes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}

                <Header/>
                <Routs/>


        </div>
    )
}

export default HW5
