import React, { useState, useEffect } from 'react'

export default function Item(props) {
    const [select, setSelect] = useState(false)

    const onChangeChecked = () => {
        setSelect(!select)
    }

    return (
        <div>
            <span><input type='checkbox' checked={select} onChange={onChangeChecked} /></span>
            {select ? <strike>{props.text}</strike> : <span>{props.text}</span>}
            <span><button onClick={() => props.deleteFunc(props.id)}> Del </button></span>
        </div>
    )

}