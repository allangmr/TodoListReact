import { TodoListItem } from "./TodoListItem"

export const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (

            <ul className="todoList">
                        {
                            todos.map((todo, i)=> (
                                    <TodoListItem todo={todo} key={todo.id} index={i} handleToggle={handleToggle} handleDelete={handleDelete}/>
                                )
                            ) 
                        }
            </ul>
    )
}
