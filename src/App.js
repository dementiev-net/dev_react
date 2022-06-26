import React, {useReducer} from 'react'
import {Context} from './context/context'
import reducer from './context/reducer'
import {Home} from './pages/home'

function App() {

    const [state, dispatch] = useReducer(reducer, {
        status: {}, // настройки
        data: [], // данные
        ready: false
    })

    return (
        <Context.Provider value={{state, dispatch}}>
            <Home/>
        </Context.Provider>
    )
}

export default App;
