import { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import './TodoApp.css'
import { TodoFooter } from './TodoFooter'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch({
            type:'add',
            payload: newTodo
        })
    }
    const handleDelete = (todoId) => {
        dispatch({
            type:'delete',
            payload: todoId
        })
    }

    const handleDeleteAll = () => {
        dispatch({
            type:'deleteAll'
        })
        localStorage.removeItem('todos');
    }

    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }

    return (
        <div className="wrapper">
            <header>TodoApp</header>
            <TodoAdd handleAddTodo={handleAddTodo} />
            <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
            <TodoFooter todosPending={todos.length} handleDeleteAll={handleDeleteAll}/>
        </div>
    )
}
