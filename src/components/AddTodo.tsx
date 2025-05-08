import { ChangeEvent, FormEvent, useState } from "react"
import { TodosObject } from "../models/TodosObject"

type AddTodoProps = {
    addTodos: (t:TodosObject) => void
}



export const AddTodo = (props: AddTodoProps) => {
    const [addTodo, setAddTodo] = useState<TodosObject>({
        title: "",
        description: "",
        completed: false,
        id: 0
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
    <div>
        <form onSubmit={handelSubmit} id="">
            <label htmlFor="titleInput">{"vad vill du kalla din uppgift?"}</label>
            <input id="titleInput" onChange={handelChange} ></input>

            <label htmlFor="descriptionInput">{"Beskriv din uppgift"}</label>
            <input id="descriptionInput" onChange={handelChange} ></input>

            <button>{"Lägg till Todo"}</button>
        </form>
    </div>
    </>

}