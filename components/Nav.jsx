
export default function Nav() {
    function addtoDo() {
        let paragraph = document.createElement('p');
        let toDoContainer =document.querySelector('.toDoContainer')
        Text = document.querySelector('.input').value;
        paragraph.innerHTML = Text
        toDoContainer.appendChild(paragraph)
        Text.innerHTML = ""
        
    }
        
    
    return (

        <div className="flex justify-center align-middle  h-auto w-full">

            <form className=" mx-3 my-3">
                    <input type='text' placeholder="Enter to do" className="input"/> <button onClick={addtoDo} className="sendbutton">+</button>
            </form>
            <div className="toDoContainer bg-slate-400 backdrop-blur-sm text-white font-medium"></div>
        </div>
    )
}
