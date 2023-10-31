import styles from './TaskArea.module.css'
import { Task } from './Task'
import { useTaskContext } from './TaskContext';
import { v4 as uuidv4 } from 'uuid';
import { EmptyList } from './EmptyList';

export function TaskArea(){

    const { tasks, updateTasks, toggleTaskChecked } = useTaskContext();

    const tasksFinished = tasks.reduce((count, task) => {
        if (task.checked) {
            return count + 1;
        }
        return count;
    }, 0);

    function deleteTask(taskToDelete: string){
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.content !== taskToDelete;
        })

        updateTasks(tasksWithoutDeleteOne);
    }

    return (
        <div className={styles.taskArea}>
            <div className={styles.taskAreaContent}>
                <header className={styles.taskAreaHeader}>
                    <div className={styles.tasksCreated}>
                        <p>Tarefas criadas</p>
                        <button>{tasks.length}</button>
                    </div>
                    <div className={styles.tasksCompleted}>
                        <p>Concluídas</p>
                        <button>{tasksFinished} de {tasks.length}</button>
                    </div>

                </header>
                <main className={styles.tasksAreaMain}>
                
                    {tasks.length === 0 ? (
                        <EmptyList />
                    ) : (
                        tasks.map(task => (
                            <Task 
                                key={uuidv4()} 
                                checked={task.checked}
                                content={task.content}
                                onDeleteTask={deleteTask}
                                onToggleTaskChecked={toggleTaskChecked}
                            />
                        ))
                    )}
                    
                </main>
            </div>
        </div>
    )
}