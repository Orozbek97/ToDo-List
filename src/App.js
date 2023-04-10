import React, {useState} from "react";
import DeleteIcon from "../components/icons/delete-icon";
import EditIcon from "../components/icons/edit-icon";

function App() {
    const [todoList , setTodoList] = useState((list))
    const [todo , setTodo] = useState('')

    const handleAddTodo = () => {
        if (todo.length) {
            const newTodo = {
                id: todoList.length + 1,
                text: todo,
                completed: false
            }
            setTodo('')
            setTodoList([...todoList, newTodo])
        }
    }
    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }
  return (
    <div className={'wrapper'}>
        <div>
            <div className={'input-wrapper'}>
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                />
                <button className={'add-btn'} onClick={handleAddTodo}>
                    add
                </button>
            </div>
            {
                todoList.map((todo) => (
                    <div key={todo.id} className={'todo-wrapper'}>
                        <span> {todo.text}</span>
                    <div>
                    <button className={'edit-btn'}>
                        <EditIcon/>
                    </button>
                     <button className={'edit-btn'}
                     onClick={() => handleDelete(todo.id)}>
                         <DeleteIcon/>
                     </button>
                    </div>
                    </div>
                  ))
            }
        </div>
    </div>
                )

            }

export default App;

const list = [
    {id: 1, text: 'Learn React', completed: false},
    {id: 2, text: 'Learn Firebase', completed: false},
    {id: 3, text: 'Learn GraphQL', completed: false},
    {id: 4, text: 'Learn React Native', completed: false},
]
