import Task from "./Task";
const TaskList = () => {
    return (
        <div>
            <h3>My To-do's!</h3>
            <ul>
                <Task />
                <Task />
                <Task />
            </ul>
        </div>
    )
}

export default TaskList;