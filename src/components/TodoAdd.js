import { useForm } from '../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length <=1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo(newTodo)
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="inputField">
                    <input 
                        type="text" 
                        name="description"
                        placeholder="Add some description"
                        autoComplete="off"
                        value={description}
                        onChange={handleInputChange}
                    />
                        <button type="submit" className="active">
                            <i className="fas fa-plus"></i>
                        </button>
                </div>
            </form>
        </>
    )
}
