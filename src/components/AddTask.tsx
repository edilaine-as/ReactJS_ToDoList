import { PlusCircle } from 'phosphor-react'
import styles from './AddTask.module.css'

export function AddTask(){
    return(
        <div className={styles.textBox}>
            <div className={styles.textBoxContent}>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button>
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </div>
        </div>
    )
}