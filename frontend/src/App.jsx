import { useEffect, useState } from "react"
import { getTodo, addTodo, deleteTodo } from "./services/ServiceWorkers"
function App() {
  const [Todos, setTodos] = useState(null);
  const [Atodo, setAtodo] = useState("");

  useEffect(() => {
    try {
      getTodo()
        .then(response => {
          setTodos(response.data);
        })
    } catch (e) {
      console.log(e.message);
    }
  }, [Todos])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(Atodo.trim() === "")) {
      addTodo({"todo": Atodo, "status": false});
      setAtodo("");
    }
  }

  const handleDelete = (id) => {
    deleteTodo(id);
  }

  const Template = Todos ? Todos.map((atodo) => {
    return (
      <ul key={atodo._id} className="atodo" >
        <li className='todo' style={{ textDecoration: atodo.status ? "line-through" : "none" }}>{atodo.todo}</li>
        <div className='btns'>
          <button className='btn delete_btn' onClick={() => handleDelete(atodo._id)}>Delete</button>
          <button className='btn edit_btn' onClick={() => handleEdit(atodo._id)}>Edit</button>
          <button className={atodo.status ? "btn completed_btn" : "btn incomplete_btn"} onClick={() => handleStatus(atodo._id)}>{atodo.status ? "completed" : "incomplete"}</button>
        </div>
      </ul>)
  }) : (<h1>Loading...</h1>)

  return (
    <>
      <form>
        <input
          type='text'
          name="todo"
          onChange={(e) => setAtodo(e.target.value)}
          value={Atodo}
        />
        <input
          type='submit'
          value={'submit'}
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