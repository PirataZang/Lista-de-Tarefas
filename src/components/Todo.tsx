import React from 'react'

const Todo = ({ todo, removeTodo }) => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <div className="category">
                    <p>({todo.categoria})</p>
                </div>
            </div>
            <div className="complated">
                {/* <p> -- {todo.isComplated == true ? 'Finalizado' : 'Não Finalizado'}</p> */}
                <button className='complete'>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo