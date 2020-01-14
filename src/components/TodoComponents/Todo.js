import React from 'react'

export default function Todo(props) {
    return (
        <div
            className={props.todo.completed ? 'completed' : 'incomplete'}
            onClick={() => props.toggleTodo(props.todo.id)}
        >
            <p>{props.todo.name}</p>
        </div>
    )
}
