const TaskForm = () => {
    return (
        <div>
            {/*THIS IS A FORM*/}
            <form>
                <label>Task Descripton:</label>
                <input type="text" placeholder="Description"/>
                <input type="submit" value="Create New Task"/>
            </form> 
        </div>
    )
}

export default TaskForm;