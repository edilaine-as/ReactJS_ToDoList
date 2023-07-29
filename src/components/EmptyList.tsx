import clipBoardEmpty from '../assets/clipboard.svg'
import styles from './EmptyList.module.css'

export function EmptyList(){
    return(
        <>
            <img src={clipBoardEmpty} alt="Ícone de prancheta representando lista vazia" />
            <div className={styles.tasksAreaMainTextEmpty}>    
                <p>Você ainda não tem tarefas cadastradas</p>
                Crie tarefas e organize seus itens a fazer
            </div>
        </>
    )
}