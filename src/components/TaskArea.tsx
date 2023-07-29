import styles from './TaskArea.module.css'
import { Task } from './Task'
import { EmptyList } from './EmptyList'

export function TaskArea(){
    return (
        <div className={styles.taskArea}>
            <div className={styles.taskAreaContent}>
                <header className={styles.taskAreaHeader}>
                    <div className={styles.tasksCreated}>
                        <p>Tarefas criadas</p>
                        <button>0</button>
                    </div>
                    <div className={styles.tasksCompleted}>
                        <p>Concluídas</p>
                        <button>0</button>
                    </div>

                </header>
                <main className={styles.tasksAreaMain}>
                    <Task/>
                </main>
            </div>
        </div>
    )
}