import { useState } from 'react'

// main function
const ToDoList = () => {
/* Initial state del input */
  const [inputValue, setInputValue] = useState('')

  // estado loco agregado para la lista de tareas
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    console.log('agregue este input', inputValue)
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]) // checar si agregando los ... en inputValue tiene el mismo resultado
      setInputValue('')
    }
  }

  // aqui va mi invento

  // function handleDelete
  const handleDeleteItem = (i) => {
    console.log('comparo el index para quitar el input de la lista todo', i.value)
    setTodos(todos.filter((todos, index) => i !== index))
  }

  return (
    <>
      <h1>lista de Tareas</h1> {/* esta lista va a reflejar los inputs que se manden. El varlor del input es el  */}
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAdd}>Agregar</button>
      <ul>
        <li />
      </ul>

    </>
  )
}

export default ToDoList
