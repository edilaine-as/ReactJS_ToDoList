import styles from './Header.module.css'
import toDoListLogo from '../assets/to-do.svg'
import { AddTask } from './AddTask'

export function Header(){
    return (
        <div>
            <header className={styles.header}>
                <img src={toDoListLogo} alt="Logotipo do To-do List" />
            </header>
            <AddTask/>
        </div>
    )
}