import React from 'react'

export const Error = (props) => (
    <h2 className='error'>Ошибка получения данных: {props.message}</h2>
)