import { useState } from "react"

function ToDoItem({id, title, completed}) {
    const [checked, SetChecked] = useState(completed);
    const completedTask = ['todo']
        if(checked){
            completedTask.push('completed')
        }
    
    return(
        <li className = {completedTask.join(' ')}>
            <input 
            type="Checkbox"
            defaultChecked = {checked}
            onChange={() => SetChecked(!checked)}/>

            <span>{title}</span>
        </li>
    )
}
export default ToDoItem