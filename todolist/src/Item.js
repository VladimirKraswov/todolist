import React, { useState, useEffect } from 'react'
import './Item.css'

export default function Item(props) {
    return (
        <li className='item'>
            <input className='checkbox' type='checkbox' checked={props.checked} onChange={() => props.onChecked(props.id)} />
            {props.checked ? <p className='text'><strike>{props.text}</strike></p> : <p className='text'>{props.text}</p>}
            <a href='#' className="close" onClick={() => props.deleteFunc(props.id)}> X </a>
        </li>
    )
}