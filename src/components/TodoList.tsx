import { ChangeEvent, useState } from "react"
import { TodosObject } from "../models/TodosObject"
import "../styles/TodoList.css"

export type TodoListProps = {
    todos: TodosObject
    removeChekedTodos: (id:number) => void
    toggelTodoStatus: (id:number) => void
}

export const TodoList = (props: TodoListProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(props.todos.completed);

    const onChangeHandeler = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        props.toggelTodoStatus(props.todos.id);


        setIsChecked(checked)
        if (checked) {
            props.todos.completed = checked
        }
    }

 
    return <>
    <ul className="list">
        <li><h3>{props.todos.title}</h3></li>
        <li>{props.todos.description}</li>
        <li>{"Uppgiften klar: "}<input type="checkbox" onChange={onChangeHandeler} checked={isChecked} /></li>
    </ul>
    </>
}