import { useState } from "react";
export default function Nav() {
    const [ todo, setTodo ] = useState([]);
    const [ title, setTitle ] = useState('');
    const handleChange = () => {
        setTodo([...todo, {title:title, completed: false}])
    }    
    return (
        <div className="flex align-middle justify-center bg-slate-500 backdrop-blur-md h-screen w-3/4 mx-10 py-10">
            <input className=" w-auto h-6 bg-white text-slate-800" onChange={(e) =>
        setTitle(e.target.value)} /> <button onClick={() => handleChange()} >+</button>
            <div className="h-2/3 w-3/4 backdrop-blur">
                <ul>
                    {todo.map(todos => (
                        <li>{todos.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}