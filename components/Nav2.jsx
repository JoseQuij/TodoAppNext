import { useState } from "react";
 export default function Nav2() {
    const [ todo, setTodo ] = useState([])
    const [ title, setTitle ] = useState('')

    const handleChange = () => {
        setTodo([...todo, {title:title, completed: false}]);
        setTitle.value =  "";
    }
    return (
        <div>
            <input className="text-white bg-slate-500" type="text"  onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={handleChange} disabled={title.length == 0}>Add todo</button>
            <div>
                <ul>
                    {todo.map(todos => (
                        <li>{todos.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}