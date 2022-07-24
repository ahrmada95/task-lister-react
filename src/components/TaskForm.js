import React, {useState} from 'react';

const TaskForm = ({handleSubmit}) => {
    const [text, setText] = useState('');
    return (
        <div>
            {/*THIS IS A FORM*/}
            <form onSubmit={(event) => { 
                                        event.preventDefault(); 
                                        if(text!=="") {
                                            handleSubmit(text); 
                                        }
                                        event.target.reset();
                                        setText('');
                                        }
                            }>
                <label>Task Descripton:</label>
                <input type="text" placeholder="Description" onChange={(event) => { setText(event.target.value) }}/>
                <input type="submit" value="Create New Task"/>
            </form> 
        </div>
    )
}

export default TaskForm;