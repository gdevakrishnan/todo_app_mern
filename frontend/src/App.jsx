import { useEffect, useState } from "react"
import getTodo from "./services/ServiceWorkers"

function App() {
  const [Todos, setTodods] = useState([]);
  useEffect(() => {
    try {
      getTodo().then((response) => setTodods(response));
    } catch (e) {
      console.log(e.message);
    }
  }, [Todos])

  const Template = Todos ? Todos.map((atodo) => {
    return (
      <ul key={atodo._id} className="atodo" >
        <li className='todo' style={{ textDecoration: atodo.status ? "line-through" : "none" }}>{atodo.todo}</li>
        <div className='btns'>
          <button className='btn delete_btn' onClick={() => handleDelete(atodo._id)}>Delete</button>
          <button className='btn edit_btn' onClick={() => handleEdit(atodo._id)}>Edit</button>
          <button className={atodo.status ? "btn completed_btn": "btn incomplete_btn"} onClick={() => handleStatus(atodo._id)}>{atodo.status ? "completed" : "incomplete"}</button>
        </div>
      </ul>)
  }) : (<h1>Loading...</h1>)
  
  return (
    <>
      <form>
        <input
          type='text'
        />
        <input
          type='submit'
          value={'submit'}
        />
      </form>

      <div className='todo_container'>
        { Template }
      </div>
    </>
  )
}

export default App