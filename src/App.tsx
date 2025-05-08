
import { useState } from 'react'
import './App.css'
import { TodosObject } from './models/TodosObject'
import { TodoListLoop } from './components/TodoListLoop'
import { AddTodo } from './components/AddTodo'


function App() {
const [todo, setTodo] = useState<TodosObject[]>([
  // new TodosObject("Dammsuga", false, "dammsuga vardagsrummet och köket",),
  // new TodosObject("Handla", false, "handla: mjölk, kaffe och winerbröd", )
])

const removeCheckedTodos = () => {
  setTodo(todo.filter((t) => !t.completed))
}

const addTodo = (newTodo: TodosObject) => {
  setTodo([...todo, new TodosObject(newTodo.title, newTodo.completed, newTodo.description)])
}



console.log(todo)
  return (
    <>
    <h1>Välkommen till din Todo lista </h1>
      <AddTodo addTodos={addTodo} /> 
    <div id='container'>
      <TodoListLoop loopProperties={todo}  removeChekedTodos={removeCheckedTodos} />
    </div>
    </>
  )
}

export default App
