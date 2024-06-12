import React from 'react'

const ToDoItem = ({ todo, handleDelete }) => {
  return (
    <li>{todo}
      <button
        className='delete-button'
        onClick={handleDelete}
      >Eliminar esta cosa
      </button>
    </li>
  )
}

export default ToDoItem
// componente con props
