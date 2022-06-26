import React, {useContext, useEffect, useCallback} from 'react'
import {Context} from '../../context/context'
import {Loader} from '../../components/Loader'
import {Error} from '../../components/Error'
import {useHttp} from '../../hooks/http.hook'

export const Home = () => {

    const {state, dispatch} = useContext(Context)
    const {get, loading, error} = useHttp()

    const loadData = useCallback(async () => {
        try {
            // запрос данных
            const response = await get(`${process.env.REACT_APP_URL_GET_JSON_DATA}`)
            dispatch({
               type: 'LOAD_DATA',
               payload: {
                   data: response.data,
                   status: response.status
               }
            })
        } catch (e) {
            console.error(e)
            return false
        }
    }, [get])


    // первая загрузка страницы
    useEffect(() => {
        loadData()
    }, [loadData])

    if (error) return <Error message={error}/>
    if (loading || !state.ready) return <Loader/>

    return (
       <>
           <h1 className='data'>Ответ сервера: {state.data}</h1>
       </>
    )
}
