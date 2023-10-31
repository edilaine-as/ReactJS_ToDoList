import { PlusCircle } from 'phosphor-react'
import styles from './AddTask.module.css'
import { ChangeEvent, useState } from 'react';
import { useTaskContext } from './TaskContext';

export function AddTask(){
    const { addNewTask } = useTaskContext();
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(){
        addNewTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    return(
        <div className={styles.textBox}>
            <div className={styles.textBoxContent}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewCommentChange}/>
                <button onClick={handleCreateNewTask}>
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </div>
        </div>
    )
}