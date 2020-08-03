import React, { useState, useEffect } from 'react'
import './App.css';
import Item from './Item.js'

function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const onChange = (event) => {
    setText(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.target.value === '') return
    if (event.key === 'Enter') {
      setList([...list, {
        text: event.target.value,
        id: Math.random()
      }
      ])
      setText('') // Тест изменений GitHub
    }
  }

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <input value={text} placeholder="What needs to be done?" onChange={onChange} onKeyPress={handleKeyPress} />
      {list.map((item, index) => (
        <Item key={index} id={item.id} text={item.text} deleteFunc={deleteItem} />
      ))}
    </div>
  );
}

export default App;