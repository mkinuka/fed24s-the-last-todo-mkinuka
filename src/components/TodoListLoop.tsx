import { TodosObject } from "../models/TodosObject"
import { TodoList } from "./TodoList"
import "../styles/TodoListLoop.css"

export type TodoListLoopProps = {
    loopProperties: TodosObject[],
    removeChekedTodos: () => void,
    toggleTodoStatus: (id:number) => void
}

export const TodoListLoop = (props: TodoListLoopProps) => {


    return <>

        <div id="object-container">
        {props.loopProperties.map((t) => (
            <TodoList todos={t} key={t.id} removeChekedTodos={props.removeChekedTodos} toggelTodoStatus={props.toggleTodoStatus}/>
        ))}
        </div>      
    </>
}