import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Header from "./Header";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    SUPER_JUNIOR: '/super_junior',
}

function Routs() {
    return (
        <div>

            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

                <Route path={'/'} element={<Header/>}/>

                {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
                // add routes

                <Route path={'/pre-junior'} element={<PreJunior/>}/>
                <Route path={'/junior'} element={<div> BEST JUNIOR EVER </div>}/>
                <Route path={'/super_junior'} element={<div> BEST REAL JUNIOR EVER </div>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>

        </div>
    )
}

export default Routs
