import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { Checkbox } from './Checkbox'
import { useState } from 'react';

interface TaskProps{
    content: string;
    onDeleteTask: (task: string) => void;
}

export function Task(props: TaskProps){

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    function handleDeleteTask(){
        props.onDeleteTask(props.content);
    }

    return(
        <div className={styles.task}>
            <Checkbox isChecked={isChecked} onChangeCheckbox={handleCheckboxChange} />
            <label className={styles.taskDescription}>{props.content}</label>
            <button onClick={handleDeleteTask} className={styles.deleteTask} title='Deletar tarefa'>
                <Trash className={styles.iconDeleteTask}/>  
            </button>
        </div>
    )
}