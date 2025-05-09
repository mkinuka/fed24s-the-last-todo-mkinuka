import { ChangeEvent, FormEvent, useState } from "react"
import { TodosObject } from "../models/TodosObject"
import "../styles/AddTodo.css"

type AddTodoProps = {
    addTodos: (t:TodosObject) => void
}



export const AddTodo = (props: AddTodoProps) => {
    const [addTodo, setAddTodo] = useState<TodosObject>({
        title: "",
        description: "",
        completed: false,
        id: Date.now()
    })
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.id === "titleInput") {
            setAddTodo({...addTodo, title: e.target.value})
        }
        if (e.target.id === "descriptionInput") {
            setAddTodo({...addTodo, description: e.target.value})
        }
    }



    const handelSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.addTodos(addTodo)
    }


    return <>
    <div className="add-todo-container">
        <form onSubmit={handelSubmit} id="form">
            <label htmlFor="titleInput">{"vad vill du kalla din uppgift?"}</label>
            <input id="titleInput" onChange={handelChange} ></input>

            <label htmlFor="descriptionInput">{"Beskriv din uppgift"}</label>
            <input id="descriptionInput" onChange={handelChange} ></input>

            <button id="addButton">{"Lägg till Todo"}</button>
        </form>
    </div>
    </>

}