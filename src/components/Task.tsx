import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task(){
    return(
        <div className={styles.task}>
            <input className={styles.taskCheck} type="checkbox" id="scales" checked></input>
            <label className={styles.taskDescription} htmlFor="scales">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            <button className={styles.deleteTask}>
                <Trash className={styles.iconDeleteTask}/>  
            </button>
        </div>
    )
}