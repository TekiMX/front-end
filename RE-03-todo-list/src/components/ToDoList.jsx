import { useState } from 'react'

const ToDoList = () => {
  /* la docu va dentro de las llaves, porque es JS creo ...
  aqui va el estado de la funcion con su dato inicial y lo que va a hacer */
  const [inputValue, setInputValue] = useState('')

  // estado loco agregado para la lista de tareas
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    console.log('agregue este input', inputValue)
    if (inputValue.trim()) {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
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
      <ul />

    </>
  )
}

export default ToDoList
