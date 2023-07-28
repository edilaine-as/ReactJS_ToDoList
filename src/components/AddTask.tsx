import styles from './AddTask.module.css'

export function AddTask(){
    return(
        <div className={styles.textBox}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>Criar</button>
        </div>
    )
}