import { useState } from 'react'

function App() {
  const [Atodo, setAtodo] = useState("")
  const [Todo, setTodo] = useState([])
  const [Id, setId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Atodo.trim() === "") {
      alert("Enter a valid Todo");
    } else {
      setTodo([...Todo, { todo: Atodo, id: Id, status: false }]);
      setAtodo("");
      setId(Id + 1)
    }
  }

  const handleDelete = (id) => {
    const filteredData = Todo.filter((atodo) => id !== atodo.id)
    setTodo([...filteredData])
  }

  const handleEdit = (Id) => {
    const editableTodo = Todo.filter((atodo) => atodo.id === Id)
    setAtodo(editableTodo[0].todo);
    handleDelete(Id);
  }

  const handleStatus = (Id) => {
    setTodo(
      Todo.map((atodo) => {
        if (atodo.id !== Id) {
          return atodo;
        } else {
          return { ...atodo, status: !(atodo.status) }
        }
      })
    )
  }

  const Template = Todo.map((atodo, index) => {
    return (
      <ul key={index} className="atodo" >
        <li className='todo' style={{ textDecoration: atodo.status ? "line-through" : "none" }}>{atodo.todo}</li>
        <div className='btns'>
          <button className='btn delete_btn' onClick={() => handleDelete(atodo.id)}>Delete</button>
          <button className='btn edit_btn' onClick={() => handleEdit(atodo.id)}>Edit</button>
          <button className={atodo.status ? "btn completed_btn": "btn incomplete_btn"} onClick={() => handleStatus(atodo.id)}>{atodo.status ? "completed" : "incomplete"}</button>
        </div>
      </ul>)
  })

  return (
    <>
      <form>
        <input
          type='text'
          value={Atodo}
          onChange={(e) => setAtodo(e.target.value)}
        />
        <input
          type='submit'
          value={"Add"}
          onClick={(e) => handleSubmit(e)}
        />
      </form>

      <div className='todo_container'>
        {Template}
      </div>
    </>
  )
}

export default App