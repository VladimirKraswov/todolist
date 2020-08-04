import React, { useState, useEffect } from 'react'
import './App.css';
import Item from './Item.js'
import ToolBar from './ToolBar.js'
import { v4 } from 'uuid'

function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    if (localStorage.getItem('list')) {
      setList(JSON.parse(localStorage.getItem('list')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    console.log(list)
  }, [list])


  const onChange = (event) => {
    setText(event.target.value)
  }

  const onChangeChecked = (id) => {
    let tempList = [...list]
    tempList.map((e) => {
      if (e.id === id) e.checked = !e.checked
    })
    setList(tempList)
  }

  const handleKeyPress = (event) => {
    var str = event.target.value.replace(/ +/g, ' ').trim();
    if (str === '' || str === ' ') return
    if (event.key === 'Enter') {
      setList([...list, {
        text: str,
        checked: false,
        id: v4(),
      }
      ])
      setText('')
    }
  }

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const clearItems = () => {
    setList(list.filter((item) => item.checked !== true))
  }

  let showClearButton = false
  list.forEach(element => {
    if (element.checked) showClearButton = true
  });

  return (
    <div className="App">
      <p className='todos'>todos</p>
      <input className='textFiled' value={text} placeholder="What needs to be done?" onChange={onChange} onKeyPress={handleKeyPress} />
      <ul className='list'>
        {list.map((item, index) => (
          <>
            <Item key={index} checked={item.checked} id={item.id} text={item.text} deleteFunc={deleteItem} onChecked={onChangeChecked} />
            <hr />
          </>
        ))}
        {list.length ? <ToolBar showClear={showClearButton} itmeCount={list.length} clear={clearItems} /> : ''}
      </ul>


    </div>

  );
}

export default App;