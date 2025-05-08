import { TodosObject } from "../models/TodosObject"
import { TodoList } from "./TodoList"
import "../styles/TodoListLoop.css"

export type TodoListLoopProps = {
    loopProperties: TodosObject[],
    removeChekedTodos: () => void
}

export const TodoListLoop = (props: TodoListLoopProps) => {


    return <>
        <div id="object-container">
        {props.loopProperties.map((t) => (
            <TodoList todos={t} key={t.id} removeChekedTodos={props.removeChekedTodos}/>
        ))}
        </div>
        <label htmlFor="remove-todos">{"Ta bort klara uppgifter från listan: "}</label>
        <button id="remove-todos" onClick={props.removeChekedTodos}>{"Rensa lista"}</button>
    </>
}