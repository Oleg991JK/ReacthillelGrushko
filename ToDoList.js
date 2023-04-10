import ToDoItem from "./TodoTask"
 function ToDoList({todos}) {
    return(
        <ol>
            {todos.map(item => <ToDoItem key = {item.id} {...item}/>)}
        </ol>
    )
}

export default ToDoList;
