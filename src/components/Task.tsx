import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { Checkbox } from './Checkbox'

interface TaskProps{
    content: string;
    checked: boolean;
    onDeleteTask: (task: string) => void;
    onToggleTaskChecked: (task: string) => void;
}

export function Task(props: TaskProps){

    function handleDeleteTask(){
        props.onDeleteTask(props.content);
    }

    function handleCheckboxChange(){
        props.onToggleTaskChecked(props.content);
    }

    return(
        <div className={styles.task}>
            <Checkbox isChecked={props.checked} onChangeCheckbox={handleCheckboxChange} />
            <label className={`${styles.taskDescription} ${props.checked? styles.taskDescriptionChecked : styles.taskDescriptionNotChecked}`}>{props.content}</label>
            <button onClick={handleDeleteTask} className={styles.deleteTask} title='Deletar tarefa'>
                <Trash className={styles.iconDeleteTask}/>  
            </button>
        </div>
    )
}