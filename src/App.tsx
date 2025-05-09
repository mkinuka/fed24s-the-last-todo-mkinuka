
import { useState } from 'react'
import './App.css'
import { TodosObject } from './models/TodosObject'
import { TodoListLoop } from './components/TodoListLoop'
import { AddTodo } from './components/AddTodo'

function App() {
const [todo, setTodo] = useState<TodosObject[]>([
  new TodosObject("Dammsuga", false, "dammsuga vardagsrummet och köket",),
  new TodosObject("Handla", false, "handla: mjölk, kaffe och winerbröd", )
])

const removeCheckedTodos = () => {
  setTodo(todo.filter((t) => !t.completed))
}

const addTodo = (newTodo: TodosObject) => {
  setTodo([...todo, new TodosObject(newTodo.title, newTodo.completed, newTodo.description)])
}

const sortTodosByName = () => {
  const sortedTodos = [...todo].sort((a, b) => a.title.localeCompare(b.title))
  setTodo(sortedTodos)
}

const toggleTodoStatus = (id:number) => {
  const updatedTodos = todo.map((t) => {
    if (t.id === id) {
      return { ...t, completed: !t.completed }
    }
    return t
  })
  setTodo(updatedTodos)
}

console.log(todo)
  return <>
  <main className="w-screen flex items-center flex-col">
    <div className='form-container'>

    <h1 className='bigHeader'>Välkommen till din Todo lista </h1>
      <AddTodo addTodos={addTodo} /> 
      <button onClick={sortTodosByName}>{"sortera listan"}</button>
      <button onClick={removeCheckedTodos}>{"Ta bort klara todos"}</button>
    </div>

    <section id='parent-container'>
      <div id='container'>
        <h3 className='header '>{"Kvar att göra"}</h3>
        <TodoListLoop loopProperties={todo.filter((t) => !t.completed)}  removeChekedTodos={removeCheckedTodos} toggleTodoStatus={toggleTodoStatus} />
      </div>
      <div id="container-two">
        <h3 className='header'>{"Klara todos"}</h3>
        <TodoListLoop loopProperties={todo.filter((t) => t.completed)} removeChekedTodos={removeCheckedTodos} toggleTodoStatus={toggleTodoStatus}/>
      </div>
    </section>
  </main>
  
    </>
  
}

export default App
