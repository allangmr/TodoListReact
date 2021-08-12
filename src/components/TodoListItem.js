export const TodoListItem = ({todo, handleToggle, handleDelete, index: i}) => {
    return (
        <li 
            key={todo.id} 
        >
            {todo.desc}<span className="icon" onClick={() => handleDelete(todo.id)}><i className="fas fa-trash"></i></span>
            
        </li>
    )
}
