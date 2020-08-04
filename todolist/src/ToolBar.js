import React, { useState, useEffect } from 'react'
import './ToolBar.css'

export default function ToolBar(props) {
    return (
        <span className='toolBar'>
            <p className='itemCount'>{props.itmeCount} items left </p>
            {props.showClear ? <a className='clearItem' href='#' onClick={props.clear}>Clear completed</a> : ''}
        </span>
    )
} 