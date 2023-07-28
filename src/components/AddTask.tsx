import styles from './AddTask.module.css'

export function AddTask(){
    return(
        <div className={styles.textBox}>
            <div>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button>Criar</button>
            </div>
        </div>
    )
}