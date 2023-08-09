import styles from './TaskArea.module.css'
import { Task } from './Task'
import { useTaskContext } from './TaskContext';

export function TaskArea(){
    const { tasks, updateTasks } = useTaskContext();

    function deleteTask(taskToDelete: string){
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task !== taskToDelete;
        })

        updateTasks(tasksWithoutDeleteOne);
    }

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
                    {tasks.map(task => {
                        return (
                            <Task 
                                key={task} 
                                content={task} 
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}