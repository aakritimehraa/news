import React, { useState } from 'react'


const ToDoLists = (props)=> {

const [line, setLine] = useState(false)
    const cutt = () => {
        setLine(!line)
    }

    return (
        <div className="todo">
     <li style={{textDecoration: line ? 'line-through' : 'none' }} onClick={cutt}>  
     <span style={{textDecoration: 1>2 ? 'none' : 'none' }} onClick={() => {props.onSelect(props.id)}}>X</span> {props.text}</li>
       </div>
    )
}

export default ToDoLists